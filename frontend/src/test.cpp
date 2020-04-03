#include <cstdio>
#include <cstring>
#include <cstdlib>
#include <ctype.h>
#include <ctime>

// Chances that available for user to try
#define CHANCE 8;

// Check whether the input character is letter
bool basicCheck(char* n);
// Check if the input letter is in the target string. Changes the 'unknowed' string if a letter is found
bool check(char* s, char n, char* unknowed);
// Prompt the user to choose whether they want to continue
bool checkContinue();
// Check if the user have tried this letter
bool checkDuplicate(char n, char* guessedLetter, int len);
// Check if one term of game is finish (user guess the word successfully or user exhaugst all chances)
bool checkFinish(char* word, char* unknowed, int chances);
// Modefy the available letters list
void changeAvailable(char n, char* available);

int main(int argc, char* argv[])
{
	const char* wordList[] = { "orange", "red", "green", "blue", "yellow", "white", "black" };
	bool continued = true;

	if (argc < 2)
	{
		srand((unsigned int)time(NULL));
	}
	else
	{
		srand(atoi(argv[1]));
	}

	while (continued)
	{
		int randNum = rand() % 7;

		int chances = CHANCE;
		char available[] = { "abcdefghijklmnopqrstuvwxyz" };
		int len = strlen(wordList[randNum]);

		char* word = (char*)malloc(sizeof(wordList[randNum]));
		
		strcpy_s(word, len+1, wordList[randNum]);
		int length = strlen(word);

		// 
		char* guessedLetters = (char*)malloc(length + 1);
		for (int i = 0; i < length; i++)
		{
			guessedLetters[i] = '1';
		}
		guessedLetters[length] = '\0';
		//
		int guessed = 0;

		// The unknowed part of the word, represented with '-' character
		char* unknowed = (char*)malloc(length + 1);
		for (int i = 0; i < length; i++)
		{
			unknowed[i] = '-';
		}
		unknowed[length] = '\0';

		bool finished = false;
		char n;
		while (!finished)
		{
			printf("Guess a letter for the word: '%s'\n", unknowed);
			printf("You have %d wrong guesses left, and have guessed %d letters out of %d so far.\n", chances, guessed, length);
			printf("Available letters are: %s\n", available);

			while ((n = getchar()) == '\n');
			
			while (!basicCheck(&n))
			{
				printf("'%c' is not a valid letter! Try again.\n", n);
				while ((n = getchar()) == '\n');
			}
			{
				putchar('\n');
				if (checkDuplicate(n, guessedLetters, length))
				{
					printf("!!! You already tried '%c' !!!\n", n);
					putchar('\n');
				}
				else
				{
					guessedLetters[guessed] = n;
					guessed++;
					if (check(word, n, unknowed))
					{
						printf("*** Correct guess - '%c' IS in the word ***\n", n);
						putchar('\n');
					}
					else
					{
						printf("!!! Wrong guess - '%c' is not in the word !!!\n", n);
						chances--;
						putchar('\n');
					}
					changeAvailable(n, available);
				}
			}
			finished = checkFinish(word, unknowed, chances);
		}
		free(word);
		free(unknowed);
		free(guessedLetters);
		continued = checkContinue();
	}
}

bool checkFinish(char* word, char* unknowed, int chances)
{
	bool check = true;
	if (strcmp(word, unknowed) == 0)
	{
		printf("Well done! The word was '%s'. You finished with %d wrong guesses left.\n", word, chances);
		check = true;
	}
	else if (chances == 0)
	{
		printf("You failed! The word was '%s'.\n", word);
		check = true;
	}
	else
	{
		check = false;
	}
	return check;
}

void changeAvailable(char n, char* available)
{
	int len = strlen(available);
	for (int i = 0; i < len; i++)
	{
		if (available[i] == n)
		{
			available[i] = '.';
			break;
		}
	}
	return;
}

bool basicCheck(char* n)
{
	*n = tolower(*n);

	int check = (int)*n;

	if (check >= 97 && check <= 122)
	{
		return true;
	}
	else
	{
		return false;
	}
}

bool check(char* s, char n, char* unknowed)
{
	int len = strlen(s);
	char* temp = s;
	int index = 0;
	bool found = false;

	while (*temp)
	{
		if (*temp == n)
		{
			// Store the index of the letter that user successfully guesses
			int index = temp - s;
			unknowed[index] = s[index];
			found = true;
		}
		temp++;
	}
	return found;
}

bool checkDuplicate(char n, char* guessedLetters, int len)
{
	for (int i = 0; i < len; i++)
	{
		if (guessedLetters[i] == n)
		{
			return true;
		}
	}
	return false;
}

bool checkContinue()
{
	printf("Try again? (y/n)");
	char temp = '0';
	while (((temp = getchar()) != 'y') && (temp != 'n'));
	if (temp == 'y')
	{
		return true;
	}
	else if (temp == 'n')
	{
		return false;
	}
}