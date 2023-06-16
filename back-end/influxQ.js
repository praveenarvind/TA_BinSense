import { InfluxDB, Point } from "@influxdata/influxdb-client";

export const queryApi = new InfluxDB({
  url: "https://eu-central-1-1.aws.cloud2.influxdata.com/",
  token:
    "34upmLaFhLPPBeczx_0OzLUpEPdin3Hkvw_TbuT-1tzvSMbzreCBPSOzC-5hfCEDhBTySRXxWM-FYmrYsNdpVA==",
}).getQueryApi("ca1d73e2ef60d31d");

//"https://eu-central-1-1.aws.cloud2.influxdata.com/", "34upmLaFhLPPBeczx_0OzLUpEPdin3Hkvw_TbuT-1tzvSMbzreCBPSOzC-5hfCEDhBTySRXxWM-FYmrYsNdpVA=="
