*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    background-color: rgb(0, 60, 116);
}
/**body{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(0, 0, 0);
}**/
.title-page{
    text-align: center;
    /**position: absolute;**/
    color: aliceblue
}
.title-box{
 
    text-align: center;
    color: aliceblue
}
.battery-test{
    height: 100%;
    background-color: chartreuse;
}
.body-battery{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(0, 0, 0);
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
/**.battery-level{
    width: 10%;
    height: 100%;
    animation: battery-level 3s forwards;
    animation-direction: reverse;
    background-color: chartreuse;
}**/
