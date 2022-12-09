import Container from "../../shared/composers/container";

const FilterBlog = (props) => {
  function onFilterValueChanged(event) {
    props.filterValueSelected(event.target.value);
  }

  return (
    <Container className=' pb-5 rounded-[20px] mt-[-50px] mb-4 md:w-full  md:max-w-[50%] mx-auto md:mx-0 w-full px-16 md:px-[60px]'>
      <Container className='md:flex-row md:w-full md:space-x-4 space-y-5 md:space-y-0'>
        <Container className='md:w-full'>
          <select
            name='isAvailable'
            onChange={onFilterValueChanged}
            placeholder={"placeholder"}
            className='rounded-[10px] h-10 drop-shadow-xl bg-white outline-0 px-2'
          >
            <option value='all' className=''>
              choisis ton sujet
            </option>

            <option value='marketing'>Marketing</option>
            <option value='dev'>Dev</option>
          </select>
        </Container>
      </Container>
    </Container>
  );
};
export default FilterBlog;
