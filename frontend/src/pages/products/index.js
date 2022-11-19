import React, { useState } from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";

/**
 * This is the main products page
 * You may update this component to your preferred UI and work
 * The default UI for this component is mainly built with MaterialUI.
 */
export default function Products() {
  const [products] = useState([
    {
      id: 1,
      name: "Adidas bag",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
      price: 1000
    },
    {
      id: 2,
      name: "Nike bag",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
      price: 2000
    },
    {
      id: 2,
      name: "Nike bag",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
      price: 2000
    }
  ]);
  
  return (
    <Box sx={{ p: 5 }}>
      <Typography variant="h4">
        Welcome to OneGuru!
      </Typography>
      <Box
        sx={{
          mt: 5,
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {products.map(product => (
          <Card
            sx={{
              height: "350px",
              width: "350px",
              cursor: "pointer",
              m: 1
            }}
          >
            <CardContent>
              <CardMedia 
                component="img"
                image={product.imageUrl}
                alt={product.imageUrl}
              />
              <Box sx={{ mt: 2 }}>
                <Typography variant="h5">{product.name}</Typography>
                <Typography>{product.price}</Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};