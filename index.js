//show cart products
let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const products = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWlyfGVufDB8fDB8fHww",
    title: "Modern Accent Chair",
    price: 120,
    description:
      "Add a pop of color and style with the Modern Accent Chair, perfect for making a statement while offering comfort and support.",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Modern Accent Chair",
    price: 120,
    description:
      "Add a pop of color and style with the Modern Accent Chair, perfect for making a statement while offering comfort and support.",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1491336440196-6d4fee45a05e?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Modern Accent Chair",
    price: 120,
    description:
      "Add a pop of color and style with the Modern Accent Chair, perfect for making a statement while offering comfort and support.",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1491336440196-6d4fee45a05e?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Modern Accent Chair",
    price: 120,
    description:
      "Add a pop of color and style with the Modern Accent Chair, perfect for making a statement while offering comfort and support.",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1491336440196-6d4fee45a05e?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Modern Accent Chair",
    price: 120,
    description:
      "Add a pop of color and style with the Modern Accent Chair, perfect for making a statement while offering comfort and support.",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1491336440196-6d4fee45a05e?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Modern Accent Chair",
    price: 120,
    description:
      "Add a pop of color and style with the Modern Accent Chair, perfect for making a statement while offering comfort and support.",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Modern Accent Chair",
    price: 120,
    description:
      "Add a pop of color and style with the Modern Accent Chair, perfect for making a statement while offering comfort and support.",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1559310278-18a9192d909f?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Modern Accent Chair",
    price: 120,
    description:
      "Add a pop of color and style with the Modern Accent Chair, perfect for making a statement while offering comfort and support.",
  },
];

function showAllProducts() {
  var container = document.getElementById("products");
  container.innerHTML = products
    .map((item) => {
      return `    
        <div
            key=${item.id}
            class="rounded group relative hover:shadow border flex flex-col overflow-hidden"
          >
            <img
              src=${item.img} alt=""
              class="rounded rounded-b-none w-full h-[300px]"
            />
            <div class="p-4 flex flex-col gap-1 items-start">
            <h1 class="text-2xl font-semibold">${item.title}</h1>
            
            <h2 class="font-semibold text-red-500">${item.price}</h2>
            <p class="text-gray-700 text-lg">
            ${item.description}
              </p>
              <div
                class="group-hover:top-0 shadow group-hover:bg-[#000000b5] absolute -top-[800px] inset-0 z-3 transition-all duration-500 items-center flex justify-center rounded w-full pr-4 pt-4"
              >
                <button
                class="rounded bg-secondary hover:bg-opacity-85 px-4 py-2 text-lg add-cart" onclick='addCart(${item.id})'>
                  Add to cart
                  </button>
              </div>
              </div>
          </div>`;
    })
    .join("");
  document.getElementById("number-products").innerHTML =
    cart.length > 0 ? cart.length : "0";
}

function addCart(id) {
  let product = products.find((item) => item.id === id);
  if (!cart.some((item) => item.id === product.id)) {
    product.quantity = 1;
    cart.push(product);
  } else {
    const cartProduct = cart.find((item) => item.id === product.id);
    cartProduct.quantity++;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById("number-products").innerHTML =
    cart.length > 0 && cart.length;
}

showAllProducts();
