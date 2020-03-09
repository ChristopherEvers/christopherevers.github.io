function validation() {
  const orderSection = document.getElementById('order');
  document.getElementById('place_order').addEventListener('click', () => {
    if (orderSection.length > 0) {
      window.location.href = 'checkout.html';
    } else {
      alert(`You can't submit an order without any items`);
    }
  });
}
validation();
