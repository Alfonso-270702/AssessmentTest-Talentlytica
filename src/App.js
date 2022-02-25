import React, { useState } from "react";
import "./App.css";

function App() {
  const [penilaian, setPenilaian] = useState({
    aspek_penilaian_1: {
      mahasiswa_1: 0,
      mahasiswa_2: 0,
      mahasiswa_3: 0,
      mahasiswa_4: 0,
      mahasiswa_5: 0,
      mahasiswa_6: 0,
      mahasiswa_7: 0,
      mahasiswa_8: 0,
      mahasiswa_9: 0,
      mahasiswa_10: 0,
    },
    aspek_penilaian_2: {
      mahasiswa_1: 0,
      mahasiswa_2: 0,
      mahasiswa_3: 0,
      mahasiswa_4: 0,
      mahasiswa_5: 0,
      mahasiswa_6: 0,
      mahasiswa_7: 0,
      mahasiswa_8: 0,
      mahasiswa_9: 0,
      mahasiswa_10: 0,
    },
    aspek_penilaian_3: {
      mahasiswa_1: 0,
      mahasiswa_2: 0,
      mahasiswa_3: 0,
      mahasiswa_4: 0,
      mahasiswa_5: 0,
      mahasiswa_6: 0,
      mahasiswa_7: 0,
      mahasiswa_8: 0,
      mahasiswa_9: 0,
      mahasiswa_10: 0,
    },
    aspek_penilaian_4: {
      mahasiswa_1: 0,
      mahasiswa_2: 0,
      mahasiswa_3: 0,
      mahasiswa_4: 0,
      mahasiswa_5: 0,
      mahasiswa_6: 0,
      mahasiswa_7: 0,
      mahasiswa_8: 0,
      mahasiswa_9: 0,
      mahasiswa_10: 0,
    },
  });

  const [isSubmit, setIsSubmit] = useState(false);
  const aspeks = [1, 2, 3, 4];
  const siswas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handler = (e, siswa, aspek) => {
    penilaian[`aspek_penilaian_${aspek}`][`mahasiswa_${siswa}`] = Number(
      e.target.value
    );
    setPenilaian({ ...penilaian });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit} className="form">
        <table>
          <thead>
            <tr>
              <th className="thead"></th>
              <th className="thead">Aspek Penilaian 1</th>
              <th className="thead">Aspek Penilaian 2</th>
              <th className="thead">Aspek Penilaian 3</th>
              <th className="thead">Aspek Penilaian 4</th>
            </tr>
          </thead>
          <tbody>
            {siswas.map((siswa, index) => (
              <tr key={index}>
                <td>Mahasiswa {siswa}</td>
                {aspeks.map((aspek, index) => (
                  <React.Fragment key={index}>
                    <td>
                      <input
                        disabled={isSubmit}
                        type="number"
                        max="10"
                        min="0"
                        value={
                          penilaian[`aspek_penilaian_${aspek}`][
                            `mahasiswa_${siswa}`
                          ]
                        }
                        onChange={(e) => handler(e, siswa, aspek)}
                      />
                    </td>
                  </React.Fragment>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <button type="submit" disabled={isSubmit} className="button">
          Simpan
        </button>
      </form>
      {isSubmit ? <pre>{JSON.stringify(penilaian, null, 2)}</pre> : ""}
    </div>
  );
}

export default App;
