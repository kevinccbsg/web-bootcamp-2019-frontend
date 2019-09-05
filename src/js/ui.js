

// const data = [1, 2, 3, 4];

// const multiplicar = value =>
//   item => item * value;

// const multiplicarPor2 = multiplicar(2);
// const multiplicarPor5 = multiplicar(5);

// const result = data.map(multiplicarPor5);

// console.log(result);

// const logo = document.querySelector('#navbar .navbar-logo');

export const toggle = elemento => (removeClass, addClass) => {
  elemento.classList.remove(removeClass);
  elemento.classList.add(addClass);
};

export const toggleClass = (elemento, toggleClass) => {
  elemento.classList.toggle(toggleClass);
};

// const NOMBRE = 'nombre';

// export default NOMBRE;
// module.exports = { toggle };

// const handleLogoClassName = toggle(logo);

//setTimeout(() => handleNavBar('no-search', 'search'), 1000);

// handleLogoClassName('asd', 'test-class');
