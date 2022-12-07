import { Input, Space } from "antd";

const { Search } = Input;

const SearchField = ({ onSubmit }) => {
  const handleSearchHoTen = (value) => {
    console.log("Hoten", value);
    onSubmit({ HoVaTen: value });
  };
  const handleSearchDonVi = (value) => {
    console.log("DonVi", value);
    onSubmit({ DonVi: value });
  };
  const handleSearchNganhNghe = (value) => {
    console.log("Nganh nghe", value);
    onSubmit({ NganhNgheDaoTao: value });
  };
  const handleSearchDiaLy = (value) => {
    console.log("Dia ly", value);
    onSubmit({ NguyenQuan: value });
  };

  return (
    <>
      <Space direction="vertical">
        <Search
          placeholder="Tìm kiếm họ tên..."
          allowClear
          enterButton="Tìm kiếm"
          size="large"
          onSearch={handleSearchHoTen}
        />
        <Search
          placeholder="Tìm kiếm đơn vị..."
          allowClear
          enterButton="Tìm kiếm"
          size="large"
          onSearch={handleSearchDonVi}
        />
        <Search
          placeholder="Tìm kiếm chuyên ngành..."
          allowClear
          enterButton="Tìm kiếm"
          size="large"
          onSearch={handleSearchNganhNghe}
        />
        <Search
          placeholder="Tìm kiếm địa lý..."
          allowClear
          enterButton="Tìm kiếm"
          size="large"
          onSearch={handleSearchDiaLy}
        />
      </Space>
    </>
  );
};

export default SearchField;
