import React, { useState, useEffect } from 'react';
//import { InfluxDB } from '@influxdata/influxdb-client';
import "./Tpss2.css";

const Tpss2 = () => {
  const [data, setData] = useState({});

  useEffect(() => {

    // const fetchData = async () => {
    //   const token = '34upmLaFhLPPBeczx_0OzLUpEPdin3Hkvw_TbuT-1tzvSMbzreCBPSOzC-5hfCEDhBTySRXxWM-FYmrYsNdpVA==';
    //   const org = 'ca1d73e2ef60d31d';
    //   const bucket = 'dataBin';
    //   const url = 'https://eu-central-1-1.aws.cloud2.influxdata.com';
    
    //   const influxDB = new InfluxDB({ url, token });
    
    //   try {
    //     const query = `
    //       from(bucket: "${bucket}")
    //       |> range(start: -10s)
    //       |> filter(fn: (r) => r._measurement == "dataBinSense" and (r.TPSS == "1" or r.TPSS == "2" or r.TPSS == "3" or r.TPSS == "4"))
    //       |> last()
    //     `;
    
    //     const result = await influxDB.queryRows(query, org);
    //     const parsedData = {};
    
    //     await result.forEach((row, tableMeta) => {
    //       const measurement = tableMeta.name;
    //       const tpss = row.values.get('_field');
    //       const kepenuhanSampah = row.values.get('kepenuhanSampah');
    //       const levelBattery = row.values.get('levelBattery');
    
    //       if (!parsedData[tpss]) {
    //         parsedData[tpss] = {};
    //       }
    
    //       parsedData[tpss][measurement] = { kepenuhanSampah, levelBattery };
    //     });
    
    //     setData(parsedData);
    //   } catch (error) {
    //     console.error('Error retrieving data from InfluxDB:', error);
    //     setData({});
    //   }
    // };

    const fetchData = async () => {
      try {
        const response = await fetch('');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error retrieving data from InfluxDB:', error);
        setData({});
      }
    };

    // Fetch data initially
    fetchData();

    // Fetch data every 10 seconds
    const interval = setInterval(fetchData, 10000);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, []);

  const getDataValue = (tpss1, tpss2) => {
    const tpssData = data[tpss1] && data[tpss1][tpss2] ? data[tpss1][tpss2] : null;
    const kepenuhanSampah = tpssData ? tpssData.kepenuhanSampah : 0;
    const levelBattery = tpssData ? tpssData.levelBattery : 0;
    return { kepenuhanSampah, levelBattery };
  };

  return (
    <div>
      <div>
        <h2>TPSS = 1 and TPSS = 1:</h2>
        {Object.keys(getDataValue(1, 1)).map((key) => (
          <p key={key}>{key} = {getDataValue(1, 1)[key]}</p>
        ))}
      </div>
      <div>
        <h2>TPSS = 1 and TPSS = 2:</h2>
        {Object.keys(getDataValue(1, 2)).map((key) => (
          <p key={key}>{key} = {getDataValue(1, 2)[key]}</p>
        ))}
      </div>
      <div>
        <h2>TPSS = 1 and TPSS = 3:</h2>
        {Object.keys(getDataValue(1, 3)).map((key) => (
          <p key={key}>{key} = {getDataValue(1, 3)[key]}</p>
        ))}
      </div>
      <div>
        <h2>TPSS = 1 and TPSS = 4:</h2>
        {Object.keys(getDataValue(1, 4)).map((key) => (
          <p key={key}>{key} = {getDataValue(1, 4)[key]}</p>
        ))}
      </div>
    </div>
  );
};

export default Tpss2;
