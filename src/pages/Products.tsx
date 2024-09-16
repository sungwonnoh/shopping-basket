import { Grid, Paper, Container } from "@mui/material";
import ProductThumbnail from "../components/ProductThumbnail";

const products = [...Array(10)].map(() => ({
  name: "고구마",
  price: "1000",
  imgUrl:
    "https://egnmall.kr/thumb/d593060f9bf1cef1b7c8c1e58464c59a/800_800_0d304a925fc5097919a9faf1db6a.jpg",
}));

export default function Products() {
  return (
    <Container sx={{ paddingTop: 7 }}>
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        {products.map(({ name, price, imgUrl }) => (
          <Grid item xs={6} md={4}>
            <ProductThumbnail name={name} price={price} imgUrl={imgUrl} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
