const uuid = () => {
   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      // eslint-disable-next-line
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
   });
};

const uuidShort = () => uuid().split("-").pop();

const today = () => {
   let d = new Date();
   return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
};

const getAttributes = (PREFIX_TITLE = "tmp0x") => {
   const randomStr = uuid();
   const dateStr = today();
   const titleSuffix = uuidShort();
   const title = `${dateStr}-${PREFIX_TITLE}-${titleSuffix}`;
   const description = randomStr;
   const subject = randomStr;
   const collection = "opensource_movies";
   const guid = randomStr;
   const creator = PREFIX_TITLE;

   return {
      title,
      description,
      subject,
      collection,
      creator,
      guid,
   };
};

const generateLink = (PREFIX_TITLE) => {
   let resource = getAttributes(PREFIX_TITLE);
   let url = `https://archive.org/upload/`;
   url = url + "?title=" + resource.title;
   url = url + "&description=" + resource.description;
   url = url + "&subject=" + resource.subject;
   url = url + "&creator=" + resource.creator;
   url = url + "&collection=" + resource.collection;
   return {
      url: url,
      guid: resource.guid,
      title: resource.title,
   };
};

const generateLinks = (count, PREFIX_TITLE) => {
   return Array(count)
      .fill(0)
      .map(() => generateLink(PREFIX_TITLE));
};



const LinkService = {
   generateLink,
   generateLinks
}

export default LinkService;