
# Maybellin SPA 

Single page application created to consume a constum API of makeup products, with single details of each product and links to the original product webpage of each product.

## Demo

<p align="center">
  <img src="https://raw.githubusercontent.com/elsargentpepper/Maybellin_SPA/main/demo_image.png" alt="webpage demo png">
</p>

## Tech Stack

**Client:** HTML, CSS, JavaScript vanilla, Tavis CI, Github Pages

**Server:** Node, Webpack y Babbel

  
## API Reference

#### Get all items

```http
  GET https://salty-beyond-87863.herokuapp.com/api/v1/products
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `API` | `string` | ?offset=${page})&results=100 |

#### Get item

```http
  GET https://salty-beyond-87863.herokuapp.com/api/v1/products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | ${id} |

## Authors

- Backend developer [@Santiagonk](https://github.com/Santiagonk)
- Frontend developer [@elsargentpepper](https://github.com/elsargentpepper)


## Deployment
[![Build Status](https://travis-ci.org/elsargentpepper/Maybellin_SPA.svg?branch=main)](https://travis-ci.org/elsargentpepper/Maybellin_SPA)

https://elsargentpepper.github.io/Maybellin_SPA/
