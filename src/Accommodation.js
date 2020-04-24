import React from "react";
import "./css/Accommodation.css";
import Header from "./Header";
import Footer from "./Footer";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/Card";

class Accommodation extends React.Component {
  constructor() {
    super();

    this.state = {
      hotels: [],
      isLoaded: false,
    };
  }

  callServer() {
    fetch("/accommodationReq")
      .then((res) => res.json())
      .then((res) => this.setState({ isLoaded: true, hotels: res }))
      .catch((err) => err);
  }

  componentDidMount() {
    this.callServer();
  }

  render() {
    var { isLoaded, hotels } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Header />
          <div className="accommodationheader"> Accommodation Nearby </div>
          <CardGroup>
            {hotels.map((hotel) => (
              <Card key={hotel._id}>
                <Card.Img
                  variant="top"
                  src={hotel.linkImage}
                  className="Hotel-img"
                />

                <Card.Body>
                  <Card.Title>{hotel.hotelname}</Card.Title>
                  <Card.Text>{hotel.description}</Card.Text>
                </Card.Body>

                <Card.Body>
                  <Card.Link href={hotel.linkBook} className="link-color">
                    Book A Room
                  </Card.Link>
                  <Card.Link href={hotel.linkReview} className="link-color">
                    Hotel Reviews
                  </Card.Link>
                </Card.Body>
              </Card>
            ))}
            ;
          </CardGroup>
          <Footer />
        </div>
      );
    }
  }

  /*
       {hotel.hotelname}
                            {hotel.description}
    render(){
        return(
            <div>
                <Header />
                <div class="accommodationheader"> Accommodation Nearby </div>
                <CardGroup>
                    <Card className = "border-setup">
                        <Card.Img variant="top" src="https://www.britanniahotels.com/image/fit/660x340/cms/britannia/images/new/birmingham-exterior-carousel-1-660x340002.jpg" className = "Hotel-img"/>

            <Card.Body>
              <Card.Title>Brittania Hotel</Card.Title>
              <Card.Text>
                "Modest rooms in an unpretentious lodging offering a carvery
                restaurant, a cosy bar & free Wi-Fi."
              </Card.Text>
            </Card.Body>

            <Card.Body>
              <Card.Link
                href="https://www.google.com/travel/hotels/Birmingham/entity/CgoIhcmA5c2dwMtmEAE?g2lb=2502548%2C2503153%2C4254308%2C4258168%2C4260007%2C4270442%2C4271060%2C4274032%2C4291318%2C4305595%2C4306835%2C4308216%2C4314846%2C4317915%2C4328159%2C4329288%2C4330113%2C4338438%2C4348882%2C4270859%2C4284970%2C4291517%2C4292955%2C4316256&hl=en&gl=uk&un=1&q=hotels%20in%20birmingham%20city%20centre&rp=EIHU4oDdn6jnjwEQhcmA5c2dwMtmELbA85aS-NDZDBCTudPktszj7yE4AUAASAI&ictx=1&ved=2ahUKEwjGtNCbm9TnAhWMVBUIHdnLD3kQvS4wAXoECAgQLQ&hrf=CgUIrwEQACIDR0JQKhYKBwjkDxACGBESBwjkDxACGBIYASgAWAGqARoKAgghEgIIDxICCBUSAggNEgIIZxICCC8YAaoBCgoCCBQSAggbGAGqAQ4KAggcEgIIcxICCEcYAaoBCgoCCCUSAgh6GAGqARoKAggREgIIKhICCEASAgg4EgIIVxICCCsYAaoBCwoCCC4SAwiAARgBqgEGCgIIRhgAqgEKCgIIUBICCE8YAaoBBgoCCDkYAJIBAiAB"
                className="link-color"
              >
                Book A Room
              </Card.Link>
              <Card.Link
                href="https://www.google.com/travel/hotels/Birmingham/entity/CgoIhcmA5c2dwMtmEAE/reviews?g2lb=2502548%2C2503153%2C4254308%2C4258168%2C4260007%2C4270442%2C4271060%2C4274032%2C4291318%2C4305595%2C4306835%2C4308216%2C4314846%2C4317915%2C4328159%2C4329288%2C4330113%2C4338438%2C4348882%2C4270859%2C4284970%2C4291517%2C4292955%2C4316256&hl=en&gl=uk&un=1&q=hotels%20in%20birmingham%20city%20centre&rp=EIHU4oDdn6jnjwEQhcmA5c2dwMtmELbA85aS-NDZDBCTudPktszj7yE4AUAASAI&ictx=1&ved=2ahUKEwjGtNCbm9TnAhWMVBUIHdnLD3kQvS4wAXoECAgQLQ&hrf=CgUIrwEQACIDR0JQKhYKBwjkDxACGBESBwjkDxACGBIYASgAWAGqARoKAgghEgIIDxICCBUSAggNEgIIZxICCC8YAaoBCgoCCBQSAggbGAGqAQ4KAggcEgIIcxICCEcYAaoBCgoCCCUSAgh6GAGqARoKAggREgIIKhICCEASAgg4EgIIVxICCCsYAaoBCwoCCC4SAwiAARgBqgEGCgIIRhgAqgEKCgIIUBICCE8YAaoBBgoCCDkYAJIBAiAB"
                className="link-color"
              >
                Hotel Reviews
              </Card.Link>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img
              variant="top"
              src="https://media-cdn.tripadvisor.com/media/photo-s/07/51/5d/57/the-briar-rose.jpg"
              className="Hotel-img"
            />

            <Card.Body>
              <Card.Title>The Briar Rose</Card.Title>
              <Card.Text>
                "Lively hotel with casual rooms & free Wi-Fi, plus a pub
                offering real ales & a steak menu."
              </Card.Text>
            </Card.Body>

            <Card.Body>
              <Card.Link
                href="https://www.google.com/travel/hotels/Birmingham/entity/CgsIgdTigN2fqOePARAB?g2lb=2502548%2C2503153%2C4254308%2C4258168%2C4260007%2C4270442%2C4271060%2C4274032%2C4291318%2C4305595%2C4306835%2C4308216%2C4314846%2C4317915%2C4328159%2C4329288%2C4330113%2C4338438%2C4348882%2C4270859%2C4284970%2C4291517%2C4292955%2C4316256&hl=en&gl=uk&un=1&q=hotels%20in%20birmingham%20city%20centre&rp=EIHU4oDdn6jnjwEQhcmA5c2dwMtmELbA85aS-NDZDBCTudPktszj7yE4AUAASAI&ictx=1&ved=2ahUKEwjGtNCbm9TnAhWMVBUIHdnLD3kQvS4wAHoECAgQIw&hrf=CgUIrwEQACIDR0JQKhYKBwjkDxACGBESBwjkDxACGBIYASgAWAGqARoKAgghEgIIDxICCBUSAggNEgIIZxICCC8YAaoBCgoCCBQSAggbGAGqAQ4KAggcEgIIcxICCEcYAaoBCgoCCCUSAgh6GAGqARoKAggREgIIKhICCEASAgg4EgIIVxICCCsYAaoBCwoCCC4SAwiAARgBqgEGCgIIRhgAqgEKCgIIUBICCE8YAaoBBgoCCDkYAJIBAiAB"
                className="link-color"
              >
                Book A Room
              </Card.Link>
              <Card.Link
                href="https://www.google.com/travel/hotels/Birmingham/entity/CgsIgdTigN2fqOePARAB/reviews?g2lb=2502548%2C2503153%2C4254308%2C4258168%2C4260007%2C4270442%2C4271060%2C4274032%2C4291318%2C4305595%2C4306835%2C4308216%2C4314846%2C4317915%2C4328159%2C4329288%2C4330113%2C4338438%2C4348882%2C4270859%2C4284970%2C4291517%2C4292955%2C4316256&hl=en&gl=uk&un=1&q=hotels%20in%20birmingham%20city%20centre&rp=EIHU4oDdn6jnjwEQhcmA5c2dwMtmELbA85aS-NDZDBCTudPktszj7yE4AUAASAI&ictx=1&ved=2ahUKEwjGtNCbm9TnAhWMVBUIHdnLD3kQvS4wAHoECAgQIw&hrf=CgUIrwEQACIDR0JQKhYKBwjkDxACGBESBwjkDxACGBIYASgAWAGqARoKAgghEgIIDxICCBUSAggNEgIIZxICCC8YAaoBCgoCCBQSAggbGAGqAQ4KAggcEgIIcxICCEcYAaoBCgoCCCUSAgh6GAGqARoKAggREgIIKhICCEASAgg4EgIIVxICCCsYAaoBCwoCCC4SAwiAARgBqgEGCgIIRhgAqgEKCgIIUBICCE8YAaoBBgoCCDkYAJIBAiAB"
                className="link-color"
              >
                Hotel Reviews
              </Card.Link>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img
              variant="top"
              src="https://radissonhotels.iceportal.com/image/Radisson-Blu-Hotel-Birmingham/Exteriorview/16256-116440-f63882708_3XL.jpg"
              className="Hotel-img"
            />

            <Card.Body>
              <Card.Title>Radisson Blu Hotel</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>

                    </Card>

                    </CardGroup>
                <Footer />
            </div>
            )
        }*/
}
//test

export default Accommodation;
