const handleView = (index) => {
  window.location.href = `product.html?index=${index}`
}

document.addEventListener("DOMContentLoaded", function() {
  const buyButton = document.getElementById("ver-mas-producto");

  buyButton.addEventListener("click", function() {
    handleView(0);
  });
});
  