import { Card, Col, Form, Input, Row, Spin } from "antd";
import { useSelector } from "react-redux";
import CardTitle from "../../../../components/CardTitle";

import styles from "./style.module.css";

const ApprovalDetail = () => {
    const detailApprovalList = useSelector((state) => state.approvalReducer.detailApprovalList);

    const { approvalInfo, comparedInfo } = detailApprovalList;

    console.log(detailApprovalList);

    // const _changedList = detailApprovalList?.compared?.map((item) => {
    //     for (const key of Object.keys(detailApprovalList.approvalInfo)) {
    //         if (key === item) {
    //             console.log("1")
    //         }
    //     }
    // })

    return <>
        {detailApprovalList?.approvalInfo && <>
            <Card style={{ marginBottom: 16 }}>
                <CardTitle title="Thông tin cơ bản" />
                <Form
                    colon={false}
                    labelAlign={"right"}
                    labelCol={{
                        xs: { span: 12 },
                        sm: { span: 6 },
                    }}
                    labelWrap
                >
                    <Row gutter={12}>
                        <Col span={12}>
                            <Form.Item label="Họ và tên" >
                                <Input value={detailApprovalList?.approvalInfo?.HoVaTen} className={approvalInfo.HoVaTen !== comparedInfo.HoVaTen ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Họ và tên khai sinh">
                                <Input value={detailApprovalList?.approvalInfo?.HoVaTenKhaiSinh} className={approvalInfo.HoVaTenKhaiSinh !== comparedInfo.HoVaTenKhaiSinh ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Bí danh">
                                <Input value={detailApprovalList?.approvalInfo?.BiDanh} className={approvalInfo.BiDanh !== comparedInfo.BiDanh ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Tên khác">
                                <Input value={detailApprovalList?.approvalInfo?.TenKhac} className={approvalInfo.TenKhac !== comparedInfo.TenKhac ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Số hiệu QN">
                                <Input value={detailApprovalList?.approvalInfo?.SoHieuQuanNhan} className={approvalInfo.SoHieuQuanNhan !== comparedInfo.SoHieuQuanNhan ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Số CMND">
                                <Input value={detailApprovalList?.approvalInfo?.SoCMND} className={approvalInfo.SoCMND !== comparedInfo.SoCMND ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Giới tính">
                                <Input value={detailApprovalList?.approvalInfo?.GioiTinh} className={approvalInfo.GioiTinh !== comparedInfo.GioiTinh ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Cấp bậc">
                                <Input value={detailApprovalList?.approvalInfo?.CapBac} className={approvalInfo.CapBac !== comparedInfo.CapBac ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Chức vụ">
                                <Input value={detailApprovalList?.approvalInfo?.ChucVu} className={approvalInfo.ChucVu !== comparedInfo.ChucVu ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Đơn vị">
                                <Input value={detailApprovalList?.approvalInfo?.DonVi} className={approvalInfo.DonVi !== comparedInfo.DonVi ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Ngày nhận cấp bậc">
                                <Input value={detailApprovalList?.approvalInfo?.NgayNhanCapBac} className={approvalInfo.NgayNhanCapBac !== comparedInfo.NgayNhanCapBac ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Ngày nhận chức vụ">
                                <Input value={detailApprovalList?.approvalInfo?.NgayNhanChucVu} className={approvalInfo.NgayNhanChucVu !== comparedInfo.NgayNhanChucVu ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Ngày sinh">
                                <Input value={detailApprovalList?.approvalInfo?.NgaySinh} className={approvalInfo.NgaySinh !== comparedInfo.NgaySinh ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Dân tộc">
                                <Input value={detailApprovalList?.approvalInfo?.DanToc} className={approvalInfo.DanToc !== comparedInfo.DanToc ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Tôn giáo">
                                <Input value={detailApprovalList?.approvalInfo?.TonGiao} className={approvalInfo.TonGiao !== comparedInfo.TonGiao ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Ngày nhập ngũ">
                                <Input value={detailApprovalList?.approvalInfo?.NgayNhapNgu} className={approvalInfo.NgayNhapNgu !== comparedInfo.NgayNhapNgu ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Ngày xuất ngũ">
                                <Input value={detailApprovalList?.approvalInfo?.NgayXuatNgu === "NaN" ? "" : detailApprovalList?.approvalInfo?.NgayXuatNgu} className={approvalInfo.NgayXuatNgu !== comparedInfo.NgayXuatNgu ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Ngày tái ngũ">
                                <Input value={detailApprovalList?.approvalInfo?.NgayTaiNgu === "NaN" ? "" : detailApprovalList?.approvalInfo?.NgayTaiNgu} className={approvalInfo.NgayTaiNgu !== comparedInfo.NgayTaiNgu ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Nguyên quán">
                                <Input value={detailApprovalList?.approvalInfo?.NguyenQuan} className={approvalInfo.NguyenQuan !== comparedInfo.NguyenQuan ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Thường trú">
                                <Input value={detailApprovalList?.approvalInfo?.ThuongTru} className={approvalInfo.ThuongTru !== comparedInfo.ThuongTru ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="TP gia đình">
                                <Input value={detailApprovalList?.approvalInfo?.TPGiaDinh} className={approvalInfo.TPGiaDinh !== comparedInfo.TPGiaDinh ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="TP bản thân">
                                <Input value={detailApprovalList?.approvalInfo?.TPBanThan} className={approvalInfo.TPBanThan !== comparedInfo.TPBanThan ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Card>
            <Card style={{ marginBottom: 16 }}>
                <CardTitle title="Thông tin đoàn thể" />
                <Form
                    colon={false}
                    labelAlign={"right"}
                    labelCol={{
                        xs: { span: 12 },
                        sm: { span: 6 },
                    }}
                    labelWrap
                >
                    <Row gutter={12}>
                        <Col span={12}>
                            <Form.Item label="Ngày vào đảng">
                                <Input value={detailApprovalList?.approvalInfo?.NgayVaoDang === "NaN" ? "" : detailApprovalList?.approvalInfo?.NgayVaoDang} className={approvalInfo.NgayVaoDang !== comparedInfo.NgayVaoDang ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Nơi vào đảng">
                                <Input value={detailApprovalList?.approvalInfo?.NoiVaoDang} className={approvalInfo.NoiVaoDang !== comparedInfo.NoiVaoDang ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Ngày vào đảng chính thức">
                                <Input value={detailApprovalList?.approvalInfo?.NgayVaoDangChinhThuc === "NaN" ? "" : detailApprovalList?.approvalInfo?.NgayVaoDangChinhThuc} className={approvalInfo.NgayVaoDangChinhThuc !== comparedInfo.NgayVaoDangChinhThuc ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Ngày vào đoàn">
                                <Input value={detailApprovalList?.approvalInfo?.NgayVaoDoan === "NaN" ? "" : detailApprovalList?.approvalInfo?.NgayVaoDoan} className={approvalInfo.NgayVaoDoan !== comparedInfo.NgayVaoDoan ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Chức vụ đảng">
                                <Input value={detailApprovalList?.approvalInfo?.ChucVuDang} className={approvalInfo.ChucVuDang !== comparedInfo.ChucVuDang ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Chức vụ đoàn">
                                <Input value={detailApprovalList?.approvalInfo?.ChucVuDoan} className={approvalInfo.ChucVuDoan !== comparedInfo.ChucVuDoan ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Card>
            <Card style={{ marginBottom: 16 }}>
                <CardTitle title="Thông tin trình độ chuyên môn" />
                <Form
                    colon={false}
                    labelAlign={"right"}
                    labelCol={{
                        xs: { span: 12 },
                        sm: { span: 6 },
                    }}
                    labelWrap
                >
                    <Row gutter={12}>
                        <Col span={12}>
                            <Form.Item label="Trình độ văn hóa">
                                <Input value={detailApprovalList?.approvalInfo?.TrinhDoVanHoa} className={approvalInfo.TrinhDoVanHoa !== comparedInfo.TrinhDoVanHoa ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Học hàm">
                                <Input value={detailApprovalList?.approvalInfo?.HocHam} className={approvalInfo.HocHam !== comparedInfo.HocHam ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Học vị">
                                <Input value={detailApprovalList?.approvalInfo?.HocVi} className={approvalInfo.HocVi !== comparedInfo.HocVi ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Trình độ ngoại ngữ">
                                <Input value={detailApprovalList?.approvalInfo?.TrinhDoNgoaiNgu} className={approvalInfo.TrinhDoNgoaiNgu !== comparedInfo.TrinhDoNgoaiNgu ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Trình độ quản lý">
                                <Input value={detailApprovalList?.approvalInfo?.TrinhDoQuanLy} className={approvalInfo.TrinhDoQuanLy !== comparedInfo.TrinhDoQuanLy ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Trình độ lý luận chính trị">
                                <Input value={detailApprovalList?.approvalInfo?.TrinhDoLyLuanChinhTri} className={approvalInfo.TrinhDoLyLuanChinhTri !== comparedInfo.TrinhDoLyLuanChinhTri ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Trình độ CMKT">
                                <Input value={detailApprovalList?.approvalInfo?.TrinhDoCMKT} className={approvalInfo.TrinhDoCMKT !== comparedInfo.TrinhDoCMKT ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Card>
            <Card style={{ marginBottom: 16 }}>
                <CardTitle title="Thông tin chuyên nghành tác chiến mạng" />
                <Form
                    colon={false}
                    labelAlign={"right"}
                    labelCol={{
                        xs: { span: 12 },
                        sm: { span: 6 },
                    }}
                    labelWrap
                >
                    <Row gutter={12}>
                        <Col span={12}>
                            <Form.Item label="Cấp tổ chức đào tạo">
                                <Input value={detailApprovalList?.approvalInfo?.CapToChucDaoTao} className={approvalInfo.CapToChucDaoTao !== comparedInfo.CapToChucDaoTao ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Chứng chỉ đào tạo">
                                <Input value={detailApprovalList?.approvalInfo?.ChungChiDaoTao} className={approvalInfo.ChungChiDaoTao !== comparedInfo.ChungChiDaoTao ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Loại hình đào tạo">
                                <Input value={detailApprovalList?.approvalInfo?.LoaiHinhDaoTao} className={approvalInfo.LoaiHinhDaoTao !== comparedInfo.LoaiHinhDaoTao ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Cơ sở đào tạo">
                                <Input value={detailApprovalList?.approvalInfo?.CoSoDaoTao} className={approvalInfo.CoSoDaoTao !== comparedInfo.CoSoDaoTao ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Nội dung đào tạo">
                                <Input value={detailApprovalList?.approvalInfo?.NoiDungDaoTao} className={approvalInfo.NoiDungDaoTao !== comparedInfo.NoiDungDaoTao ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Ngành nghề đào tạo">
                                <Input value={detailApprovalList?.approvalInfo?.NganhNgheDaoTao} className={approvalInfo.NganhNgheDaoTao !== comparedInfo.NganhNgheDaoTao ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Card>
            <Card style={{ marginBottom: 16 }}>
                <CardTitle title="Các thông tin khác" />
                <Form
                    colon={false}
                    labelAlign={"right"}
                    labelCol={{
                        xs: { span: 12 },
                        sm: { span: 6 },
                    }}
                    labelWrap
                >
                    <Row gutter={12}>
                        <Col span={12}>
                            <Form.Item label="Sức khỏe">
                                <Input value={detailApprovalList?.approvalInfo?.SucKhoe} className={approvalInfo.SucKhoe !== comparedInfo.SucKhoe ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Nhóm máu">
                                <Input value={detailApprovalList?.approvalInfo?.NhomMau} className={approvalInfo.NhomMau !== comparedInfo.NhomMau ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Số BHXH">
                                <Input value={detailApprovalList?.approvalInfo?.SoBHXH} className={approvalInfo.SoBHXH !== comparedInfo.SoBHXH ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Bậc lương">
                                <Input value={detailApprovalList?.approvalInfo?.BacLuong} className={approvalInfo.BacLuong !== comparedInfo.BacLuong ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Hệ số lương">
                                <Input value={detailApprovalList?.approvalInfo?.HeSoLuong === "NaN" ? "" : detailApprovalList?.approvalInfo?.HeSoLuong} className={approvalInfo.HeSoLuong !== comparedInfo.HeSoLuong ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Tình trạng hôn nhân">
                                <Input value={detailApprovalList?.approvalInfo?.TinhTrangHonNhan} className={approvalInfo.TinhTrangHonNhan !== comparedInfo.TinhTrangHonNhan ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                            <Form.Item label="Ngành quản lý">
                                <Input value={detailApprovalList?.approvalInfo?.NganhQuanLy} className={approvalInfo.NganhQuanLy !== comparedInfo.NganhQuanLy ? styles["changed-approval"] : ""} disabled={true} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </>
        }

    </>
}

export default ApprovalDetail;