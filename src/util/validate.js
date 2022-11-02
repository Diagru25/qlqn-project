import * as Yup from "yup";

const memberBasicSchema = Yup.object().shape({
  full_name: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
  birth_name: Yup.string()
    .trim()
    .required("Yêu cầu nhập thông tin!")
    .uppercase("Tên khai sinh bao gồm chữ viết hoa!"),
  nickname: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
  another_name: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
  military_id: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
  identity_card: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
  rank: Yup.string().trim().required("Yêu cầu nhập thông tin!"),
  date_receive_rank: Yup.date()
    .required("Yêu cầu nhập thông tin!"),
});

const validateSchema = {
  memberBasicSchema,
};

export default validateSchema;
