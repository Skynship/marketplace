// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com
import { shuffle } from "lodash";
import Mock from "../../mock";
import { uniqueProudcts, slugs, search } from "./data";
const individualProduct = {id:"d2baa1ce-968e-4bde-a073-f0bbf1cdb47b",vendor: {'firstName': 'Naomi', 'lastName': 'Ku'}, 'description': 'Good for lush skin', slug:"asus-rog-strix-g15",shop:{id:"de15ade8-e00b-40dc-9b88-8ff29b410577",slug:"cybershop",user:{id:"c048d6ea-415a-42a0-891d-80c2230690d2",email:"Arnulfo82@gmail.com",phone:"(538) 223-6217 x46645",avatar:"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/693.jpg",password:"1ua3CMPs0bptaDL",dateOfBirth:"1961-12-25T07:32:05.161Z",verified:true,name:{firstName:"Theodore",lastName:"Strosin"}},email:"Fabian.Strosin@yahoo.com",name:"Cybershop",phone:"(613) 343-9004",address:"845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",verified:false,coverPicture:"/assets/images/banners/banner-8.png",profilePicture:"/assets/images/faces/propic(7).png",socialLinks:{facebook:null,youtube:null,twitter:null,instagram:null}},title:"ASUS ROG Strix G15",brand:null,price:250,size:null,colors:[],discount:56,thumbnail:"/assets/images/products/long-product.png",images:["/assets/images/products/long-product.png","/assets/images/products/long-product.png","/assets/images/products/long-product.png"],categories:[],status:null,reviews:[],rating:4,unit:null};
Mock.onGet("/api/products").reply(async () => {
  try {
    return [200, uniqueProudcts];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});

// single product based on slug
Mock.onGet("/api/products/slug").reply(async config => {
  try {
    if (config?.params?.slug) {
      return [200, individualProduct];
    }
    return [200, individualProduct];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});

//all products slug list
Mock.onGet("/api/products/slug-list").reply(async () => {
  try {
    return [200, slugs];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});

// search products
Mock.onGet("/api/products/search").reply(async config => {
  try {
    // console.log(config.params);

    return [200, search];
  } catch (err) {
    console.error(err);
    return [500, {
      message: "Internal server error"
    }];
  }
});