const fetch = require("./fetch");

exports.getUserInfo = async (req, res, next) => {
    const { userName } = req.params;
    try {
        const userInfo = await fetch.getUser(userName);
        const repoInfo = await fetch.getRepository(userName);
        res.locals.userInfo = userInfo;
        res.locals.repository = repoInfo;

        next();
    } catch (err) {
        console.log("1111")
        next();
        // alert(err);

    }
}

exports.modifyData = (req, res, next) => {
    console.log(res.locals.userInfo);
    if (res.locals.userInfo.message) {
        next();
    } else {
        const descriptionList = [];
        const descriptionListUpprCase = [];
        const tempData = {
            login: res.locals.userInfo.login,
            id: res.locals.userInfo.id,
            url: res.locals.userInfo.url,
        }
        const tempRepoData = res.locals.repository.map(elm => {
            let descriptionArray = [];
            if (elm.description) {
                descriptionArray = elm.description.split("/");
            }
            descriptionArray.forEach(element => {
                if (!descriptionListUpprCase.includes(element.toUpperCase())) {
                    descriptionList.push(element);
                    descriptionListUpprCase.push(element.toUpperCase());
                }
            });
            // let createdDate = elm.created_at;

            const result =
            {
                title: elm.name,
                createDate: elm.created_at.slice(0, 10).split("-").join("/"),
                description: descriptionArray,
                url: elm.html_url,
            }
            return result;
        })
        const resultDescription = descriptionList.filter((elm) => elm !== "");
        resultDescription.sort();
        const descriptionObj = {};
        resultDescription.forEach(elm => {
            descriptionObj[elm] = false;
        })

        res.locals.userInfo = {
            userInfo: tempData,
            repoInfo: tempRepoData,
            descriptionObj: descriptionObj,
        }
        next();
    }
}

exports.resData = (req, res) => {
    res.status(200).send(res.locals.userInfo);
}