import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { RadioButton } from "primereact/radiobutton";
import { Checkbox } from "primereact/checkbox";

function Login() {
 

  return (
    
    <div>
          <div className="card">
              <h5>Addons</h5>
              <div className="p-grid p-fluid">
                  <div className="p-col-12 p-md-4">
                      <div className="p-inputgroup">
                          <span className="p-inputgroup-addon">
                              <i className="pi pi-user"></i>
                          </span>
                          <InputText placeholder="Username" />
                      </div>
                  </div>

                  <div className="p-col-12 p-md-4">
                      <div className="p-inputgroup">
                          <span className="p-inputgroup-addon">$</span>
                          <InputNumber placeholder="Price" />
                          <span className="p-inputgroup-addon">.00</span>
                      </div>
                  </div>

                  <div className="p-col-12 p-md-4">
                      <div className="p-inputgroup">
                          <span className="p-inputgroup-addon">www</span>
                          <InputText placeholder="Website" />
                      </div>
                  </div>
              </div>

              <h5>Multiple Addons</h5>
              <div className="p-grid">
                  <div className="p-col-12">
                      <div className="p-inputgroup">
                          <span className="p-inputgroup-addon">
                              <i className="pi pi-clock"></i>
                          </span>
                          <span className="p-inputgroup-addon">
                              <i className="pi pi-star-fill"></i>
                          </span>
                          <InputNumber placeholder="Price" />
                          <span className="p-inputgroup-addon">$</span>
                          <span className="p-inputgroup-addon">.00</span>
                      </div>
                  </div>
              </div>

              <h5>Button Addons</h5>
              <div className="p-grid p-fluid">
                  <div className="p-col-12 p-md-4">
                      <div className="p-inputgroup">
                          <Button label="Search"/>
                          <InputText placeholder="Keyword"/>
                      </div>
                  </div>

                  <div className="p-col-12 p-md-4">
                      <div className="p-inputgroup">
                          <InputText placeholder="Keyword"/>
                          <Button icon="pi pi-search" className="p-button-warning"/>
                      </div>
                  </div>

                  <div className="p-col-12 p-md-4">
                      <div className="p-inputgroup">
                          <Button icon="pi pi-check" className="p-button-success"/>
                          <InputText placeholder="Vote"/>
                          <Button icon="pi pi-times" className="p-button-danger"/>
                      </div>
                  </div>
              </div>

              <h5>Checkbox and RadioButton</h5>
              
          </div>
      </div>
  );
}

export default Login;