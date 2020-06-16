import React from 'react';

export default function LinkContainer(props) {
    const PREFIX_TITLE = "tmp0x"

    function uuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    const getDate = () => {
        let today = new Date();
        return today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    }

    const getResources = () => {
        const randomString = uuid();
        const todayDate = getDate();
        const title = todayDate + "-" + PREFIX_TITLE + "-" + randomString;
        const description = randomString;
        const subject = randomString;
        const collection = "opensource_movies";
        const guid = randomString;
        const creator = PREFIX_TITLE;
        return {
            title, 
            description,
            subject,
            collection,
            creator,
            guid
        }
    }

    const generateLink = () => {
        let resource = getResources();
        let url = `https://archive.org/upload/`;
        url = url + "?title="+resource.title;
        url = url + "&description="+resource.description;
        url = url + "&subject=" + resource.subject;
        url = url + "&creator=" + resource.creator;
        url = url + "&collection=" + resource.collection;
        return {
            url : url,
            guid : resource.guid
        }
        return url;
    }

    const generateLinks = (count) => {
        return Array(count).fill(0).map(x => generateLink())
    }

    return (
        <div>
            {
                generateLinks(4).map(x => <div style={{"padding" : "5px"}}><a href={x.url}>{x.guid}</a></div>)
            }               
        </div>
    )
}