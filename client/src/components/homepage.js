import React, { useState } from "react";
import { Button } from 'primereact/button';
import { searchArtworks } from "../api";

function Homepage({ onLogout }) {
  const [keyword, setKeyword] = useState("");
  const [artworks, setArtworks] = useState([]);

  const onChangeKeyword = (event) => {
    setKeyword(event.target.value);
  };

  const onSearchArtworks = async (event) => {
    event.preventDefault();
    const artworks = await searchArtworks({ keyword });
    setArtworks(artworks);
  };

  return (
    <Button label="Sign Out" onClick={() => onLogout()} />
    // <Container fluid>
    //   <Row noGutters>
    //     <Form className="w-100 mb-5" onSubmit={onSearchArtworks}>
    //       <InputGroup>
    //         <Form.Control
    //           type="text"
    //           placeholder="e.g. Monet, O'Keeffe, Ancient Greek..."
    //           onChange={onChangeKeyword}
    //           value={keyword}
    //         />
    //         <InputGroup.Prepend>
    //           <Button
    //             variant="outline-primary"
    //             disabled={!keyword}
    //             type="submit"
    //           >
    //             Search artworks
    //           </Button>
    //         </InputGroup.Prepend>
    //       </InputGroup>
    //     </Form>
    //   </Row>
    // </Container>
  );
}

export default Homepage;