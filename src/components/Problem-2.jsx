import React, { useEffect, useState } from "react";

import { Button, Card, Modal } from "react-bootstrap";
import "../App.css";




const Problem2 = () => {
  const [show, setShow] = useState(false);
  const [datas, setDatas] = useState([]);
  const [one, setOne] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setOne("fst");
  };

  const [show2, setShow2] = useState(false);
//   const [datas2, setDatas2] = useState([]);

  const handleClose2 = () => {
    setShow2(false);
    setOne("two");
  };
  const handleShow2 = () => setShow2(true);

  useEffect(() => {
    fetch(`https://contact.mediusware.com/api/contacts/`)
      .then((res) => res.json())
      .then((data) => setDatas(data.results))
      .catch((e) => console.error(e));
  }, []);

//   console.log(datas);


  const datas2 = datas.filter(user => user.country.name === 'United States');
  console.log(datas2)
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

          <div className="d-flex justify-content-center gap-3">
            
            <button className="btn btn-lg btn-outline-primary " type="button" onClick={handleShow}>
              All Contacts
            </button>
            <button className="btn btn-lg btn-outline-warning" type="button" onClick={handleShow2}>
              US Contacts
            </button>
          </div>
        </div>
      </div>

      {/* modal 1 */}
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Button className="a" variant="primary" onClick={handleShow}>
              Modal A
            </Button>
            <Button className="a" variant="primary" onClick={handleShow2}>
              Modal B
            </Button>

            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>

            <div>
              {datas.map((d) => (
                <Card className="b">
                  <Card.Body>
                    <h5 className="">Contry Name : {d.country.name}</h5>
                    <p>Contry Name : {d.phone}</p>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* modal 2  */}

      <div>
          <Modal
            show={show2}
            onHide={handleClose2}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Button className="a" variant="primary" onClick={handleShow}>
              Modal A
            </Button>
            <Button className="a" variant="primary" onClick={handleShow2}>
              Modal B
            </Button>

            <Button variant="secondary" onClick={handleClose2}>
                Close
              </Button>

            <div>
              {datas2.map((d) => (
                <Card className="b">
                  <Card.Body>
                    <h5 className="">Contry Name : {d.country.name}</h5>
                    <p>Contry Name : {d.phone}</p>
                  </Card.Body>
                </Card>
              ))}
            </div>
            </Modal.Body>
          </Modal>
        </div>

      {/* modal 2 ses  */}
    </div>
  );
};

export default Problem2;