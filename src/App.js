import React, { useState } from "react";
import { read, utils, writeFile } from "xlsx";
import "./App.css";
import Apple from "./components/Apple";
import HuaweiCorosGoogle from "./components/HuaweiCorosGoogle";
import GameConsole from "./components/GameConsole";
import OtherBrands from "./components/OtherBrands";
import Samsung from "./components/Samsung";
import Xiaomi from "./components/Xiaomi";
import Yandex from "./components/Yandex";
import icon from "./source/icon/icon.png";
import Used from "./components/Used";
import NewProduct from "./components/NewProduct";
import Header from "./components/Header";

const App = () => {
  const [fullList, setFullList] = useState([]);

  const handleImport = ($event) => {
    const files = $event.target.files;
    if (files.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const wb = read(event.target.result);
        const sheets = wb.SheetNames;

        if (sheets.length) {
          const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
          setFullList(rows);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleExport = () => {
    const headings = [["Товар"]];
    const wb = utils.book_new();
    const ws = utils.json_to_sheet([]);
    utils.sheet_add_aoa(ws, headings);
    utils.sheet_add_json(ws, fullList, { origin: "A2", skipHeader: true });
    utils.book_append_sheet(wb, ws, "Report");
    writeFile(wb, "Movie Report.xlsx");
  };

  return (
    <div className="App">
      <div className="flexbox">
        <img className="img" src={icon} alt="Not found" />
        <div className="wrapper_control">
          <div className="col-sm-6 offset-3">
            <div className="row">
              <div className="col-md-6">
                <div className="input-group">
                  <div className="custom-file">
                    <label for="inputGroupFile" class="custom-file-upload">
                      Custom Upload
                    </label>
                    <input
                      type="file"
                      name="file"
                      className="custom-file-input"
                      id="inputGroupFile"
                      required
                      onChange={handleImport}
                      accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper_cat">
        <Apple fullList={fullList} />
        <Samsung fullList={fullList} />
        <HuaweiCorosGoogle fullList={fullList} />
        <GameConsole fullList={fullList} />
        <OtherBrands fullList={fullList} />
        <Xiaomi fullList={fullList} />
        <Yandex fullList={fullList} />
        <Used fullList={fullList} />
        <NewProduct fullList={fullList} />
      </div>
    </div>
  );
};

export default App;
