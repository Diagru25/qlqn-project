export const makeMilitaryPdf = async (userProfile) => {
  const userInfo = userProfile.userProfile;
  const renderBasicTable = (data) => {
    if (!data || data?.length === 0) {
      return [];
    }
    const columns = [
      [{ text: "Họ và tên khai sinh", style: "tableHeader" }],
      [{ text: "Bí danh", style: "tableHeader" }],
      [{ text: "Tên khác", style: "tableHeader" }],
      [{ text: "Số hiệu quân nhân", style: "tableHeader" }],
      [{ text: "Số CMND", style: "tableHeader" }],
      [{ text: "Giới tính", style: "tableHeader" }],
      [{ text: "Cấp bậc", style: "tableHeader" }],
      [{ text: "Chức vụ", style: "tableHeader" }],
      [{ text: "Đơn vị", style: "tableHeader" }],
      [{ text: "Ngày nhận cấp bậc", style: "tableHeader" }],
      [{ text: "Ngày nhận chức vụ", style: "tableHeader" }],
      [{ text: "Ngày sinh", style: "tableHeader" }],
      [{ text: "Dân tộc", style: "tableHeader" }],
      [{ text: "Tôn giáo", style: "tableHeader" }],
      [{ text: "Ngày nhập ngũ", style: "tableHeader" }],
      [{ text: "Ngày xuất ngũ", style: "tableHeader" }],
      [{ text: "Ngày tái ngũ", style: "tableHeader" }],
      [{ text: "Nguyên quán", style: "tableHeader" }],
      [{ text: "Thường trú", style: "tableHeader" }],
      [{ text: "Thành phần gia đình", style: "tableHeader" }],
      [{ text: "Thành phần bản thân", style: "tableHeader" }],
    ];

    const b = [
      data.HoVaTen,
      data.HoVaTenKhaiSinh,
      data.BiDanh,
      data.TenKhac,
      data.SoHieuQuanNhan,
      data.SoCMND,
      data.GioiTinh,
      data.CapBac,
      data.NgayNhanCapBac,
      data.ChucVu,
      data.DonVi,
      data.NgayNhanChucVu,
      data.NgaySinh,
      data.DanToc,
      data.TonGiao,
      data.NgayNhapNgu,
      data.NgayXuatNgu,
      data.NgayTaiNgu,
      data.NguyenQuan,
      data.ThuongTru,
      data.TPGiaDinh,
      data.TPBanThan,
    ];

    columns.forEach((column, index) => {
      return column.push(b[index]);
    });

    return columns;
  };

  const renderCorporateTable = (data) => {
    if (!data || data?.length === 0) {
      return [];
    }
    const columns = [
      [{ text: "Ngày vào Đảng", style: "tableHeader" }],
      [{ text: "Nơi vào Đảng", style: "tableHeader" }],
      [{ text: "Ngày vào Đảng chính thức", style: "tableHeader" }],
      [{ text: "Ngày vào Đoàn", style: "tableHeader" }],
      [{ text: "Chức vụ Đảng", style: "tableHeader" }],
      [{ text: "Chức vụ Đoàn", style: "tableHeader" }],
    ];

    const b = [
      data.NgayVaoDang,
      data.NoiVaoDang,
      data.NgayVaoDangChinhThuc,
      data.NgayVaoDoan,
      data.ChucVuDang,
      data.ChucVuDoan,
    ];

    columns.forEach((column, index) => {
      return column.push(b[index]);
    });

    return columns;
  };

  const renderQualificationTable = (data) => {
    if (!data || data?.length === 0) {
      return [];
    }
    const columns = [
      [{ text: "Trình độ văn hóa", style: "tableHeader" }],
      [{ text: "Học hàm", style: "tableHeader" }],
      [{ text: "Học vị", style: "tableHeader" }],
      [{ text: "Trình độ quản lý", style: "tableHeader" }],
      [{ text: "Trình độ lý luận chính trị", style: "tableHeader" }],
      [{ text: "Trình độ chuyên môn kỹ thuật", style: "tableHeader" }],
      [{ text: "Trình độ ngoại ngữ", style: "tableHeader" }],
    ];

    const b = [
      data.TrinhDoVanHoa,
      data.HocHam,
      data.HocVi,
      data.TrinhDoQuanLy,
      data.TrinhDoLyLuanChinhTri,
      data.TrinhDoCMKT,
      data.TrinhDoNgoaiNgu,
    ];

    columns.forEach((column, index) => {
      return column.push(b[index]);
    });

    return columns;
  };

  const renderCyberWarfareTable = (data) => {
    if (!data || data?.length === 0) {
      return [];
    }
    const columns = [
      [{ text: "Cấp tổ chức đào tạo", style: "tableHeader" }],
      [{ text: "Chứng chỉ đào tạo", style: "tableHeader" }],
      [{ text: "Cơ sở đào tạo", style: "tableHeader" }],
      [{ text: "Nội dung đào tạo", style: "tableHeader" }],
      [{ text: "Loại hình đào tạo", style: "tableHeader" }],
      [{ text: "Ngành nghề đào tạo", style: "tableHeader" }],
    ];

    const b = [
      data.CapToChucDaoTao,
      data.ChungChiDaoTao,
      data.CoSoDaoTao,
      data.NoiDungDaoTao,
      data.LoaiHinhDaoTao,
      data.NganhNgheDaoTao,
    ];

    columns.forEach((column, index) => {
      return column.push(b[index]);
    });

    return columns;
  };

  const renderOthersTable = (data) => {
    if (!data || data?.length === 0) {
      return [];
    }
    const columns = [
      [{ text: "Sức khỏe", style: "tableHeader" }],
      [{ text: "Nhóm máu", style: "tableHeader" }],
      [{ text: "Số bảo hiểm", style: "tableHeader" }],
      [{ text: "Bậc lương", style: "tableHeader" }],
      [{ text: "Hệ số lương", style: "tableHeader" }],
      [{ text: "Tình trạng hôn nhân", style: "tableHeader" }],
      [{ text: "Ngành quản lý", style: "tableHeader" }],
    ];

    const b = [
      data.SucKhoe,
      data.NhomMau,
      data.SoBHXH,
      data.BacLuong,
      data.HeSoLuong,
      data.TinhTrangHonNhan,
      data.NganhQuanLy,
    ];

    columns.forEach((column, index) => {
      return column.push(b[index]);
    });

    return columns;
  };

  const doc = {
    pageSize: "A4",
    pageOrientation: "portrait",
    content: [
      {
        text: "Hồ sơ quản lý quân nhân",
        style: "header",
        alignment: "center",
      },
      {
        columns: [
          {
            widths: "auto",
            text: "Thông tin cơ bản",
            style: "tableTitle",
          },
        ],
      },
      {
        columns: [
          { width: 30, text: "" },
          {
            style: "table",
            table: {
              widths: [150, 300],
              headerRows: 1,
              // dontBreakRows: true,
              // keepWithHeaderRows: 1,
              body: renderBasicTable(userInfo),
              alignment: "center",
            },
          },
        ],
      },
      {
        columns: [
          {
            widths: "auto",
            text: "Thông tin đoàn thể",
            style: "tableTitle",
          },
        ],
      },
      {
        columns: [
          { width: 30, text: "" },
          {
            style: "table",
            table: {
              widths: [150, 300],
              headerRows: 1,
              // dontBreakRows: true,
              // keepWithHeaderRows: 1,
              body: renderCorporateTable(userInfo),
              alignment: "center",
            },
          },
        ],
      },
      {
        columns: [
          {
            widths: "auto",
            text: "Thông tin trình độ chuyên môn",
            style: "tableTitle",
          },
        ],
      },
      {
        columns: [
          { width: 30, text: "" },
          {
            style: "table",
            table: {
              widths: [150, 300],
              headerRows: 1,
              // dontBreakRows: true,
              // keepWithHeaderRows: 1,
              body: renderQualificationTable(userInfo),
              alignment: "center",
            },
          },
        ],
      },
      {
        columns: [
          {
            widths: "auto",
            text: "Thông tin chuyên ngành tác chiến mạng",
            style: "tableTitle",
          },
        ],
      },
      {
        columns: [
          { width: 30, text: "" },
          {
            style: "table",
            table: {
              widths: [150, 300],
              headerRows: 1,
              // dontBreakRows: true,
              // keepWithHeaderRows: 1,
              body: renderCyberWarfareTable(userInfo),
              alignment: "center",
            },
          },
        ],
      },
      {
        columns: [
          {
            widths: "auto",
            text: "Các thông tin khác",
            style: "tableTitle",
          },
        ],
      },
      {
        columns: [
          { width: 30, text: "" },
          {
            style: "table",
            table: {
              widths: [150, 300],
              headerRows: 1,
              // dontBreakRows: true,
              // keepWithHeaderRows: 1,
              body: renderOthersTable(userInfo),
              alignment: "center",
            },
          },
        ],
      },
    ],
    styles: {
      header: {
        fontSize: 22,
        bold: true,
      },
      table: {
        margin: [0, 10, 0, 15],
        alignment: "left",
      },
      tableHeader: {
        alignment: "left",
        bold: true,
      },
      tableTitle: {
        fontSize: 20,
        bold: true,
      },
    },
    defaultStyle: {
      columnGap: 5,
      fontSize: 12,
      lineHeight: 1.2,
    },
  };

  return doc;
};
