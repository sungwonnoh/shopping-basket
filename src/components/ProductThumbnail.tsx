import React from "react";
import { Card, CardMedia, Box, Typography } from "@mui/material";

const cardStyles = {
  cursor: "pointer",
  borderRadius: "1rem",
  boxShadow: "none",
  position: "relative",
  minWidth: 200,
  minHeight: 360,
  "&:after": {
    content: '""',
    display: "block",
    position: "absolute",
    width: "100%",
    height: "64%",
    bottom: 0,
    zIndex: 1,
    background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
  },
};

const contentStyles = {
  position: "absolute",
  zIndex: 2,
  bottom: 0,
  width: "100%",
};

interface Props {
  name: string;
  price: string;
  imgUrl: string;
}

export const ProductThumbnail = React.memo(function ProductThumbnail({
  name,
  price,
  imgUrl,
}: Props) {
  return (
    <Card sx={cardStyles}>
      <CardMedia sx={{ height: 140 }} image={imgUrl} />
      <Box py={3} px={2} sx={contentStyles}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">{price}</Typography>
        <Typography variant="caption">맛있는 고구마...</Typography>
      </Box>
    </Card>
  );
});

export default ProductThumbnail;
