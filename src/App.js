import React, { useEffect } from "react";
import axios from "axios";

const App = () => {
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  };

  // ...

  const fetchDataParallel = async () => {
    try {
      const currentDate = getCurrentDate();

      // Chạy cả hai công việc lấy token đồng thời
      const [Login1, Login2, Login3, Login4, Login5, Login6, Login7] =
        await Promise.all([
          axios.post("https://0311936673.minvoice.com.vn/api/Account/Login", {
            username: "KYHOADON",
            password: "kythuat",
            ma_dvcs: "VP",
          }),
          axios.post(
            "https://0311936673001.minvoice.com.vn/api/Account/Login",
            {
              username: "KYHOADON",
              password: "kythuat",
              ma_dvcs: "VP",
            }
          ),
          axios.post(
            "https://0311936673003.minvoice.com.vn/api/Account/Login",
            {
              username: "KYHOADON",
              password: "kythuat",
              ma_dvcs: "VP",
            }
          ),
          axios.post(
            "https://0311936673004.minvoice.com.vn/api/Account/Login",
            {
              username: "KYHOADON",
              password: "kythuat",
              ma_dvcs: "VP",
            }
          ),
          axios.post(
            "https://0311936673005.minvoice.com.vn/api/Account/Login",
            {
              username: "KYHOADON",
              password: "kythuat",
              ma_dvcs: "VP",
            }
          ),
          axios.post(
            "https://0311936673006.minvoice.com.vn/api/Account/Login",
            {
              username: "KYHOADON",
              password: "kythuat",
              ma_dvcs: "VP",
            }
          ),
          axios.post(
            "https://0311936673007.minvoice.com.vn/api/Account/Login",
            {
              username: "KYHOADON",
              password: "kythuat",
              ma_dvcs: "VP",
            }
          ),
        ]);

      const token1 = Login1.data.token;
      const token2 = Login2.data.token;
      const token3 = Login3.data.token;
      const token4 = Login4.data.token;
      const token5 = Login5.data.token;
      const token6 = Login6.data.token;
      const token7 = Login7.data.token;

      // Chạy cả hai công việc lấy hóa đơn đồng thời
      const [
        kh1mst1,
        kh2mst1,
        kh3mst1,
        kh4mst1,
        kh5mst1,
        kh6mst1,
        kh7mst1,
        kh8mst1,
        kh9mst1,
        kh1mst2,
        kh1mst3,
        kh2mst3,
        kh1mst4,
        kh1mst5,
        kh1mst6,
        kh2mst6,
        kh3mst6,
        kh1mst7,
      ] = await Promise.all([
        axios.post(
          "https://0311936673.minvoice.com.vn/api/InvoiceApi78/GetInvoiceFromDateToDatePagination",
          {
            tu_ngay: currentDate,
            den_ngay: currentDate,
            ky_hieu: "1C24TAC",
            start: 0,
            count: 500,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bear ${token1};VP`,
            },
          }
        ),
        axios.post(
          "https://0311936673.minvoice.com.vn/api/InvoiceApi78/GetInvoiceFromDateToDatePagination",
          {
            tu_ngay: currentDate,
            den_ngay: currentDate,
            ky_hieu: "1C24TAD",
            start: 0,
            count: 500,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bear ${token1};VP`,
            },
          }
        ),
        axios.post(
          "https://0311936673.minvoice.com.vn/api/InvoiceApi78/GetInvoiceFromDateToDatePagination",
          {
            tu_ngay: currentDate,
            den_ngay: currentDate,
            ky_hieu: "1C24TAG",
            start: 0,
            count: 500,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bear ${token1};VP`,
            },
          }
        ),
        axios.post(
          "https://0311936673.minvoice.com.vn/api/InvoiceApi78/GetInvoiceFromDateToDatePagination",
          {
            tu_ngay: currentDate,
            den_ngay: currentDate,
            ky_hieu: "1C24TAK",
            start: 0,
            count: 500,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bear ${token1};VP`,
            },
          }
        ),
        axios.post(
          "https://0311936673.minvoice.com.vn/api/InvoiceApi78/GetInvoiceFromDateToDatePagination",
          {
            tu_ngay: currentDate,
            den_ngay: currentDate,
            ky_hieu: "1C24TAL",
            start: 0,
            count: 500,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bear ${token1};VP`,
            },
          }
        ),
        axios.post(
          "https://0311936673.minvoice.com.vn/api/InvoiceApi78/GetInvoiceFromDateToDatePagination",
          {
            tu_ngay: currentDate,
            den_ngay: currentDate,
            ky_hieu: "1C24TAH",
            start: 0,
            count: 500,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bear ${token1};VP`,
            },
          }
        ),
        axios.post(
          "https://0311936673.minvoice.com.vn/api/InvoiceApi78/GetInvoiceFromDateToDatePagination",
          {
            tu_ngay: currentDate,
            den_ngay: currentDate,
            ky_hieu: "1C24TAP",
            start: 0,
            count: 500,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bear ${token1};VP`,
            },
          }
        ),
        axios.post(
          "https://0311936673.minvoice.com.vn/api/InvoiceApi78/GetInvoiceFromDateToDatePagination",
          {
            tu_ngay: currentDate,
            den_ngay: currentDate,
            ky_hieu: "1C24TAA",
            start: 0,
            count: 500,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bear ${token1};VP`,
            },
          }
        ),
        axios.post(
          "https://0311936673.minvoice.com.vn/api/InvoiceApi78/GetInvoiceFromDateToDatePagination",
          {
            tu_ngay: currentDate,
            den_ngay: currentDate,
            ky_hieu: "1C24TAB",
            start: 0,
            count: 500,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bear ${token1};VP`,
            },
          }
        ),
        axios.post(
          "https://0311936673001.minvoice.com.vn/api/InvoiceApi78/GetInvoiceFromDateToDatePagination",
          {
            tu_ngay: currentDate,
            den_ngay: currentDate,
            ky_hieu: "1C24TBA",
            start: 0,
            count: 500,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bear ${token2};VP`,
            },
          }
        ),
        axios.post(
          "https://0311936673003.minvoice.com.vn/api/InvoiceApi78/GetInvoiceFromDateToDatePagination",
          {
            tu_ngay: currentDate,
            den_ngay: currentDate,
            ky_hieu: "1C24TDA",
            start: 0,
            count: 500,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bear ${token3};VP`,
            },
          }
        ),
        axios.post(
          "https://0311936673003.minvoice.com.vn/api/InvoiceApi78/GetInvoiceFromDateToDatePagination",
          {
            tu_ngay: currentDate,
            den_ngay: currentDate,
            ky_hieu: "1C24TDB",
            start: 0,
            count: 500,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bear ${token3};VP`,
            },
          }
        ),
        axios.post(
          "https://0311936673004.minvoice.com.vn/api/InvoiceApi78/GetInvoiceFromDateToDatePagination",
          {
            tu_ngay: currentDate,
            den_ngay: currentDate,
            ky_hieu: "1C24TKB",
            start: 0,
            count: 500,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bear ${token4};VP`,
            },
          }
        ),
        axios.post(
          "https://0311936673005.minvoice.com.vn/api/InvoiceApi78/GetInvoiceFromDateToDatePagination",
          {
            tu_ngay: currentDate,
            den_ngay: currentDate,
            ky_hieu: "1C24THA",
            start: 0,
            count: 500,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bear ${token5};VP`,
            },
          }
        ),
        axios.post(
          "https://0311936673006.minvoice.com.vn/api/InvoiceApi78/GetInvoiceFromDateToDatePagination",
          {
            tu_ngay: currentDate,
            den_ngay: currentDate,
            ky_hieu: "1C24TGA",
            start: 0,
            count: 500,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bear ${token6};VP`,
            },
          }
        ),
        axios.post(
          "https://0311936673006.minvoice.com.vn/api/InvoiceApi78/GetInvoiceFromDateToDatePagination",
          {
            tu_ngay: currentDate,
            den_ngay: currentDate,
            ky_hieu: "1C24TGB",
            start: 0,
            count: 500,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bear ${token6};VP`,
            },
          }
        ),
        axios.post(
          "https://0311936673006.minvoice.com.vn/api/InvoiceApi78/GetInvoiceFromDateToDatePagination",
          {
            tu_ngay: currentDate,
            den_ngay: currentDate,
            ky_hieu: "1C24TGC",
            start: 0,
            count: 500,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bear ${token6};VP`,
            },
          }
        ),
        axios.post(
          "https://0311936673007.minvoice.com.vn/api/InvoiceApi78/GetInvoiceFromDateToDatePagination",
          {
            tu_ngay: currentDate,
            den_ngay: currentDate,
            ky_hieu: "1C24TLA",
            start: 0,
            count: 500,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bear ${token7};VP`,
            },
          }
        ),
      ]);

      // Xử lý dữ liệu hóa đơn... lấy id để ký
      if (kh1mst1.data.data) {
        kh1mst1.data.data.forEach(async (invoices) => {
          if (
            invoices.trang_thai === "Chờ ký" &&
            invoices.inv_buyerTaxCode !== null
          ) {
            // Thực hiện thao tác chờ ký thông qua invoices.hoadon68_id
            try {
              const signResponse = await axios.post(
                "https://0311936673.minvoice.com.vn/api/InvoiceApi78/Sign",
                {
                  hoadon68_id: invoices.hoadon68_id,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bear ${token1};VP`,
                  },
                }
              );

              console.log("Ký hóa đơn thành công:", signResponse.data);
            } catch (error) {
              console.error("Lỗi khi ký hóa đơn:", error);
            }
          }
        });
      }

      if (kh2mst1.data.data) {
        kh2mst1.data.data.forEach(async (invoices) => {
          if (
            invoices.trang_thai === "Chờ ký" &&
            invoices.inv_buyerTaxCode !== null
          ) {
            // Thực hiện thao tác chờ ký thông qua invoices.hoadon68_id
            try {
              const signResponse = await axios.post(
                "https://0311936673.minvoice.com.vn/api/InvoiceApi78/Sign",
                {
                  hoadon68_id: invoices.hoadon68_id,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bear ${token1};VP`,
                  },
                }
              );

              console.log("Ký hóa đơn thành công:", signResponse.data);
            } catch (error) {
              console.error("Lỗi khi ký hóa đơn:", error);
            }
          }
        });
      }
      if (kh3mst1.data.data) {
        kh3mst1.data.data.forEach(async (invoices) => {
          if (
            invoices.trang_thai === "Chờ ký" &&
            invoices.inv_buyerTaxCode !== null
          ) {
            // Thực hiện thao tác chờ ký thông qua invoices.hoadon68_id
            try {
              const signResponse = await axios.post(
                "https://0311936673.minvoice.com.vn/api/InvoiceApi78/Sign",
                {
                  hoadon68_id: invoices.hoadon68_id,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bear ${token1};VP`,
                  },
                }
              );

              console.log("Ký hóa đơn thành công:", signResponse.data);
            } catch (error) {
              console.error("Lỗi khi ký hóa đơn:", error);
            }
          }
        });
      }
      if (kh4mst1.data.data) {
        kh4mst1.data.data.forEach(async (invoices) => {
          if (
            invoices.trang_thai === "Chờ ký" &&
            invoices.inv_buyerTaxCode !== null
          ) {
            // Thực hiện thao tác chờ ký thông qua invoices.hoadon68_id
            try {
              const signResponse = await axios.post(
                "https://0311936673.minvoice.com.vn/api/InvoiceApi78/Sign",
                {
                  hoadon68_id: invoices.hoadon68_id,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bear ${token1};VP`,
                  },
                }
              );

              console.log("Ký hóa đơn thành công:", signResponse.data);
            } catch (error) {
              console.error("Lỗi khi ký hóa đơn:", error);
            }
          }
        });
      }
      if (kh5mst1.data.data) {
        kh5mst1.data.data.forEach(async (invoices) => {
          if (
            invoices.trang_thai === "Chờ ký" &&
            invoices.inv_buyerTaxCode !== null
          ) {
            // Thực hiện thao tác chờ ký thông qua invoices.hoadon68_id
            try {
              const signResponse = await axios.post(
                "https://0311936673.minvoice.com.vn/api/InvoiceApi78/Sign",
                {
                  hoadon68_id: invoices.hoadon68_id,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bear ${token1};VP`,
                  },
                }
              );

              console.log("Ký hóa đơn thành công:", signResponse.data);
            } catch (error) {
              console.error("Lỗi khi ký hóa đơn:", error);
            }
          }
        });
      }
      if (kh6mst1.data.data) {
        kh6mst1.data.data.forEach(async (invoices) => {
          if (
            invoices.trang_thai === "Chờ ký" &&
            invoices.inv_buyerTaxCode !== null
          ) {
            // Thực hiện thao tác chờ ký thông qua invoices.hoadon68_id
            try {
              const signResponse = await axios.post(
                "https://0311936673.minvoice.com.vn/api/InvoiceApi78/Sign",
                {
                  hoadon68_id: invoices.hoadon68_id,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bear ${token1};VP`,
                  },
                }
              );

              console.log("Ký hóa đơn thành công:", signResponse.data);
            } catch (error) {
              console.error("Lỗi khi ký hóa đơn:", error);
            }
          }
        });
      }
      if (kh7mst1.data.data) {
        kh7mst1.data.data.forEach(async (invoices) => {
          if (
            invoices.trang_thai === "Chờ ký" &&
            invoices.inv_buyerTaxCode !== null
          ) {
            // Thực hiện thao tác chờ ký thông qua invoices.hoadon68_id
            try {
              const signResponse = await axios.post(
                "https://0311936673.minvoice.com.vn/api/InvoiceApi78/Sign",
                {
                  hoadon68_id: invoices.hoadon68_id,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bear ${token1};VP`,
                  },
                }
              );

              console.log("Ký hóa đơn thành công:", signResponse.data);
            } catch (error) {
              console.error("Lỗi khi ký hóa đơn:", error);
            }
          }
        });
      }
      if (kh8mst1.data.data) {
        kh8mst1.data.data.forEach(async (invoices) => {
          if (
            invoices.trang_thai === "Chờ ký" &&
            invoices.inv_buyerTaxCode !== null
          ) {
            // Thực hiện thao tác chờ ký thông qua invoices.hoadon68_id
            try {
              const signResponse = await axios.post(
                "https://0311936673.minvoice.com.vn/api/InvoiceApi78/Sign",
                {
                  hoadon68_id: invoices.hoadon68_id,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bear ${token1};VP`,
                  },
                }
              );

              console.log("Ký hóa đơn thành công:", signResponse.data);
            } catch (error) {
              console.error("Lỗi khi ký hóa đơn:", error);
            }
          }
        });
      }
      if (kh9mst1.data.data) {
        kh9mst1.data.data.forEach(async (invoices) => {
          if (
            invoices.trang_thai === "Chờ ký" &&
            invoices.inv_buyerTaxCode !== null
          ) {
            // Thực hiện thao tác chờ ký thông qua invoices.hoadon68_id
            try {
              const signResponse = await axios.post(
                "https://0311936673.minvoice.com.vn/api/InvoiceApi78/Sign",
                {
                  hoadon68_id: invoices.hoadon68_id,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bear ${token1};VP`,
                  },
                }
              );

              console.log("Ký hóa đơn thành công:", signResponse.data);
            } catch (error) {
              console.error("Lỗi khi ký hóa đơn:", error);
            }
          }
        });
      }
      if (kh1mst2.data.data) {
        kh1mst2.data.data.forEach(async (invoices) => {
          if (
            invoices.trang_thai === "Chờ ký" &&
            invoices.inv_buyerTaxCode !== null
          ) {
            // Thực hiện thao tác chờ ký thông qua invoices.hoadon68_id
            try {
              const signResponse = await axios.post(
                "https://0311936673001.minvoice.com.vn/api/InvoiceApi78/Sign",
                {
                  hoadon68_id: invoices.hoadon68_id,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bear ${token2};VP`,
                  },
                }
              );

              console.log("Ký hóa đơn thành công:", signResponse.data);
            } catch (error) {
              console.error("Lỗi khi ký hóa đơn:", error);
            }
          }
        });
      }
      if (kh1mst3.data.data) {
        kh1mst3.data.data.forEach(async (invoices) => {
          if (
            invoices.trang_thai === "Chờ ký" &&
            invoices.inv_buyerTaxCode !== null
          ) {
            // Thực hiện thao tác chờ ký thông qua invoices.hoadon68_id
            try {
              const signResponse = await axios.post(
                "https://0311936673003.minvoice.com.vn/api/InvoiceApi78/Sign",
                {
                  hoadon68_id: invoices.hoadon68_id,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bear ${token3};VP`,
                  },
                }
              );

              console.log("Ký hóa đơn thành công:", signResponse.data);
            } catch (error) {
              console.error("Lỗi khi ký hóa đơn:", error);
            }
          }
        });
      }
      if (kh2mst3.data.data) {
        kh2mst3.data.data.forEach(async (invoices) => {
          if (
            invoices.trang_thai === "Chờ ký" &&
            invoices.inv_buyerTaxCode !== null
          ) {
            // Thực hiện thao tác chờ ký thông qua invoices.hoadon68_id
            try {
              const signResponse = await axios.post(
                "https://0311936673003.minvoice.com.vn/api/InvoiceApi78/Sign",
                {
                  hoadon68_id: invoices.hoadon68_id,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bear ${token3};VP`,
                  },
                }
              );

              console.log("Ký hóa đơn thành công:", signResponse.data);
            } catch (error) {
              console.error("Lỗi khi ký hóa đơn:", error);
            }
          }
        });
      }
      if (kh1mst4.data.data) {
        kh1mst4.data.data.forEach(async (invoices) => {
          if (
            invoices.trang_thai === "Chờ ký" &&
            invoices.inv_buyerTaxCode !== null
          ) {
            // Thực hiện thao tác chờ ký thông qua invoices.hoadon68_id
            try {
              const signResponse = await axios.post(
                "https://0311936673004.minvoice.com.vn/api/InvoiceApi78/Sign",
                {
                  hoadon68_id: invoices.hoadon68_id,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bear ${token4};VP`,
                  },
                }
              );

              console.log("Ký hóa đơn thành công:", signResponse.data);
            } catch (error) {
              console.error("Lỗi khi ký hóa đơn:", error);
            }
          }
        });
      }
      if (kh1mst5.data.data) {
        kh1mst5.data.data.forEach(async (invoices) => {
          if (
            invoices.trang_thai === "Chờ ký" &&
            invoices.inv_buyerTaxCode !== null
          ) {
            // Thực hiện thao tác chờ ký thông qua invoices.hoadon68_id
            try {
              const signResponse = await axios.post(
                "https://0311936673005.minvoice.com.vn/api/InvoiceApi78/Sign",
                {
                  hoadon68_id: invoices.hoadon68_id,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bear ${token5};VP`,
                  },
                }
              );

              console.log("Ký hóa đơn thành công:", signResponse.data);
            } catch (error) {
              console.error("Lỗi khi ký hóa đơn:", error);
            }
          }
        });
      }
      if (kh1mst6.data.data) {
        kh1mst6.data.data.forEach(async (invoices) => {
          if (
            invoices.trang_thai === "Chờ ký" &&
            invoices.inv_buyerTaxCode !== null
          ) {
            // Thực hiện thao tác chờ ký thông qua invoices.hoadon68_id
            try {
              const signResponse = await axios.post(
                "https://0311936673006.minvoice.com.vn/api/InvoiceApi78/Sign",
                {
                  hoadon68_id: invoices.hoadon68_id,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bear ${token6};VP`,
                  },
                }
              );

              console.log("Ký hóa đơn thành công:", signResponse.data);
            } catch (error) {
              console.error("Lỗi khi ký hóa đơn:", error);
            }
          }
        });
      }
      if (kh2mst6.data.data) {
        kh2mst6.data.data.forEach(async (invoices) => {
          if (
            invoices.trang_thai === "Chờ ký" &&
            invoices.inv_buyerTaxCode !== null
          ) {
            // Thực hiện thao tác chờ ký thông qua invoices.hoadon68_id
            try {
              const signResponse = await axios.post(
                "https://0311936673006.minvoice.com.vn/api/InvoiceApi78/Sign",
                {
                  hoadon68_id: invoices.hoadon68_id,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bear ${token6};VP`,
                  },
                }
              );

              console.log("Ký hóa đơn thành công:", signResponse.data);
            } catch (error) {
              console.error("Lỗi khi ký hóa đơn:", error);
            }
          }
        });
      }
      if (kh3mst6.data.data) {
        kh3mst6.data.data.forEach(async (invoices) => {
          if (
            invoices.trang_thai === "Chờ ký" &&
            invoices.inv_buyerTaxCode !== null
          ) {
            // Thực hiện thao tác chờ ký thông qua invoices.hoadon68_id
            try {
              const signResponse = await axios.post(
                "https://0311936673006.minvoice.com.vn/api/InvoiceApi78/Sign",
                {
                  hoadon68_id: invoices.hoadon68_id,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bear ${token6};VP`,
                  },
                }
              );

              console.log("Ký hóa đơn thành công:", signResponse.data);
            } catch (error) {
              console.error("Lỗi khi ký hóa đơn:", error);
            }
          }
        });
      }
      if (kh1mst7.data.data) {
        kh1mst7.data.data.forEach(async (invoices) => {
          if (
            invoices.trang_thai === "Chờ ký" &&
            invoices.inv_buyerTaxCode !== null
          ) {
            // Thực hiện thao tác chờ ký thông qua invoices.hoadon68_id
            try {
              const signResponse = await axios.post(
                "https://0311936673007.minvoice.com.vn/api/InvoiceApi78/Sign",
                {
                  hoadon68_id: invoices.hoadon68_id,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bear ${token7};VP`,
                  },
                }
              );

              console.log("Ký hóa đơn thành công:", signResponse.data);
            } catch (error) {
              console.error("Lỗi khi ký hóa đơn:", error);
            }
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ...

  useEffect(() => {
    // Thiết lập interval để gọi lại fetchDataParallel sau mỗi 5 phút
    const intervalId = setInterval(() => {
      fetchDataParallel();
    }, 5 * 60 * 1000); // 5 phút * 60 giây/phút * 1000 milliseconds/giây

    // Hủy interval khi component unmount
    return () => clearInterval(intervalId);
  }, []); // Dependency array rỗng để chỉ chạy một lần khi component được mount

  return <div></div>;
};

export default App;
