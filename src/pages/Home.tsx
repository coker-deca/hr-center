import { yupResolver } from '@hookform/resolvers/yup';
import { FunctionComponent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import Charts from '../components/DashboardCharts/Charts';
import Form from '../components/Form/Form';
import HomeTemplate from '../components/templates/HomeTemplate';
import { StyledButton } from '../components/ui/Button';
import { LabeledField } from '../components/ui/FormFields';
import Modal from '../components/ui/Modal/Modal';
import ModalProvider from '../contexts/ModalContext';
import myData from '../resources/data/data.json';
import { newEmployeeSchema as schema } from '../utils/schema';

localStorage.setItem("data", JSON.stringify(myData));

const Home: FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useHistory();
  const handleToggleModal = (state: boolean) => {
    setIsModalOpen(state);
  };
  const createNewEmployee = () => {
    handleToggleModal(true);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: any) => {
    localStorage.setItem("data", JSON.stringify([...myData, data]));
    handleToggleModal(false);
    alert("New Employee added successfully");
    reset();
  };
  return (
    <ModalProvider>
      <HomeTemplate>
        <Charts buttonClick={createNewEmployee} />
        <hr />
        <StyledButton
          onClick={() => {
            history.push("/employees");
          }}
        >
          View All Employee List
        </StyledButton>
        <hr />
        {isModalOpen && (
          <Modal onClose={() => handleToggleModal(false)}>
            <Form
              title={"New Employee Form"}
              handleSubmit={handleSubmit}
              details={"Add a new employee details below"}
              onSubmit={onSubmit}
            >
              <LabeledField
                label="Name"
                nameField="name"
                register={register}
                type="text"
                errorMessage={errors.name && errors.name.message}
              />
              <LabeledField
                label="Title"
                nameField="title"
                register={register}
                type="text"
                errorMessage={errors.title && errors.title.message}
              />
              {/* manager and department fields should be converted to dropdown fields */}
              <LabeledField
                label="Manager"
                nameField="manager"
                register={register}
                type="text"
                errorMessage={errors.manager && errors.manager.message}
              />
              <LabeledField
                label="Department"
                nameField="department"
                register={register}
                type="text"
                errorMessage={errors.department && errors.department.message}
              />
              {/* "management","office", "away", should be added as checkbox fields */}
              <StyledButton type="submit">Submit</StyledButton>
            </Form>
          </Modal>
        )}
      </HomeTemplate>
    </ModalProvider>
  );
};

export default Home;
