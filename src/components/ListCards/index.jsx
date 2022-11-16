import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { UserContext } from "../../contexts/UserContext";
import { Card } from "../Card";
import { Container } from "./style";

export const ListCards = () => {
  const { productsList } = useContext(ProductContext);
  const { loading } = useContext(UserContext);

  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <Container>
      <h1>Products</h1>

      <ul className="cards">
        {productsList.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
            rate={product.rating.rate}
            count={product.rating.count}
          />
        ))}
      </ul>
    </Container>
  );
};
