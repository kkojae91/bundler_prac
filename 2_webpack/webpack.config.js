// import
const path = require("path");

// export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 (상대경로로 작성)
  entry: "./js/main.js",
  // 결과물(번들)을 반환하는 설정
  output: {
    // 절대경로를 입력해야한다. __dirname으로 현재 위치의 절대경로에 dist 파일에 결과물을 반환한다고 설정!
    // path: path.resolve(__dirname, "dist"), (default값이기 때문에 설정하지 않아도 된다.) => 추후 파일 구조가 복잡해질 경우 사용하는 경우가 생길 수 있다.
    // 결과물 반환할 js파일명 설정
    // filename: "main.js", (default값이기 때문에 설정하지 않아도 된다.) => 추후 파일 구조가 복잡해질 경우 사용하는 경우가 생길 수 있다.
    // 새롭게 build할 경우 기존에 필요없는 것들은 지우고 build시키는 옵션
    clean: true,
  },
};
