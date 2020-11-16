const isRequired = () => {
  throw Error('Argument is missing');
};

// default value executes when none provided, in this case it throws an error
const setUserName = (username = isRequired()) => {
  console.log(username);
};

setUserName('Willie');
setUserName();
