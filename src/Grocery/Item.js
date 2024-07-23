import React from "react";
import { Paper, Button } from "@mui/material";

function Item({ img }) {
  return (
    <>
      <Paper>
        <img src={img.imgPath} alt="banner Images" />
        <div className="banner">
          <div className="banCnt">
            <div className="discount">
              <h6>Daily Discounts</h6>
            </div>
            <div className="banCntHead">
              <h2>Fruits & Vegetables</h2>
            </div>
            <div className="banCntPara">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
                dummy.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
            <Button
              style={{
                color: "#fff",
                backgroundColor: "#173334",
                width: "35%",
              }}
            >
              <b>Show Products</b>
            </Button>
          </div>
        </div>
      </Paper>
    </>
  );
}
export default Item;
