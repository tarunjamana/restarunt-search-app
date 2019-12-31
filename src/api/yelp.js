import axios from 'axios';

export default axios.create({
   baseURL:'https://api.yelp.com/v3/businesses',
   headers:{
     Authorization:'Bearer 0G8X0Zbc5T2HQzIQ8KCReB_i18H_LR2Wo5PEO4ou-ndTHQDCQ7oZy-cH8NvGxfrUjuz6-66PGBtocQOzI-7snxQ-VeJ510AmdDFYcTOWs2cblk10nOD3xqbjqJ8JXnYx'
    }
  });


