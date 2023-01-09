*{
    margin:0px;
    padding:0px;
    box-sizing: border-box;
    background-color: rgb(0, 60, 116);
}
.title-page{
    text-align: center;
    /**position: absolute;**/
    color: aliceblue;
}
.title-box{
    background-color: transparent;
    color: aliceblue;
    padding-top: 15px;
    padding-left: 65px;
}
.battery-test{
    height: 100%;
    background-color: chartreuse;
}
.body-battery{
    position: fixed;
    top: 50%;
    left: 35%;
    transform: translate(-50%, -50%);
}
.body-battery2{
  position: fixed;
  top: 50%;
  left: 65%;
  transform: translate(-50%, -50%);
}
.battery-outer{
    background: transparent;
    width: 250px;
    height: 100px;
    border: 5px solid white;
    border-radius: 5px;
    position: relative;
    padding: 1px;
}
.battery-outer::after{
    content: '';
    position: absolute;
    top: calc(50% - 20px);
    right: -18px;
    width: 14px;
    height: 40px;
    background-color: azure;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
}
footer {
    position: absolute;
    bottom: 10px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    color: #FFF;
    width: 100%;
    text-align: center;
    line-height: 40px;
}
  .carton1{
    background-color: #232f3a;
    border-radius: 15px;
    border-style: groove;
    width: 350px;
    height: 300px;
    padding-left: 12%;
  }
  .config-bat{
    background-color: #232f3a;
    color: aliceblue;
    padding-top: 15px;
    padding-left: 40px;
    border-radius: 5%;
}
button {
  border-radius: 10%;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  background-color: #4b8404;
}
.labels{
  background-color: transparent;
}
input{
  color: #FFF;
  background-color: black;
}
