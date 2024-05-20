import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import axios from "axios";
import { toast } from 'react-toastify';

function Add({ url }) {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad"
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad"
        });
        setImage(null);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("An error occurred while adding the product");
    }
  };

  return (
    <div className='w-[70%] ms-[max(5vw,25px)] mt-[50px] text-[#6d6d6d] text-[16px]'>
      <form className='gap-[20px]' id='flex-col' onSubmit={onSubmitHandler}>
        <div id='flex-col' className='w-[120px]'>
          <p>Upload Image</p>
          <label htmlFor='image'>
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="Upload Area"/>
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type='file'
            id='image'
            hidden
            required
          />
        </div>

        <div id='flex-col' className='w-[max(40%,280px)]'>
          <p>Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            className='border-[1px] rounded-md border-black p-[10px]'
            type='text'
            name='name'
            placeholder='Type here'
            required
          />
        </div>

        <div id='flex-col' className='w-[max(40%,280px)]'>
          <p>Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            className='border-[1px] border-black p-[10px] rounded-md'
            name='description'
            rows="6"
            placeholder='Write content here'
            required
          />
        </div>

        <div className='flex gap-[30px]'>
          <div id='flex-col'>
            <p>Product category</p>
            <select
              onChange={onChangeHandler}
              value={data.category}
              className='max-w-[120px] p-[10px] border-[1px] border-black rounded-md'
              name='category'
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure veg">Pure veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          <div id='flex-col'>
            <p>Product price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              className='max-w-[120px] p-[10px] border-[1px] border-black rounded-md'
              type='number'
              name='price'
              placeholder='$20'
            />
          </div>
        </div>
        <button className='max-w-[120px] border-none p-[10px] bg-black text-white cursor-pointer rounded-md' type='submit'>
          ADD
        </button>
      </form>
    </div>
  );
}

export default Add;
