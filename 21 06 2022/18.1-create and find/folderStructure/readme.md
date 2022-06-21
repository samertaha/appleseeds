create new product :
http://localhost:5000/api/products/create
get all products:
http://localhost:5000/api/products
get specific user by id:
http://localhost:5000/api/products/62b06f8916ef54a54fddaf2b
get active products only:
http://localhost:5000/api/products/active

find products with prices in range min max:  
 http://localhost:5000/api/products/minmax
example pass in the body { "min":50,"max":100}

update isActive and discount fields of specific product by id:
http://localhost:5000/api/products/activediscount
pass in the body for example:
{
"id":"62b06f8916ef54a54fddaf2b",
"isActive":true,
"discount":99
}
