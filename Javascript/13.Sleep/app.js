const sleep = async (millis) => {
  return new Promise((resolve) => setTimeout(resolve, millis));
};

let t = Date.now();
sleep(200).then(() => console.log(Date.now() - t)); // 100
