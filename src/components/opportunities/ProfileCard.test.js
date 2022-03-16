import ProfileCard from "./ProfileCard";
import { configure, shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

const contact = {
  firstName: "Eva",
  lastName: "Mendez",
  nationalID: "7769943543",
  birthdate: "12/14/1992",
  email: "evamendez@gmail.com",
  type: "Lead",
  imgUrl: "https://i.pravatar.cc/250?img=16",
  score: 15,
  isOnNationalRegistry: false,
  hasCleanRecord: false,
};

it("renders without crashing", () => {
  shallow(<ProfileCard contact={contact} />);
});

it("accepts contact props", () => {
  const wrapper = mount(<ProfileCard contact={contact} />);
  expect(wrapper.props().contact).toEqual(contact);
});
