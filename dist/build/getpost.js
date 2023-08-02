var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const path = require("path");
const fs = require("fs");
const dirPath = path.join(__dirname, "../src/content");
let postList = [];
const getPosts = () => __awaiter(this, void 0, void 0, function* () {
    yield fs.readdir(dirPath, (err, files) => {
        files.forEach((file, i) => {
            let obj = {
                title: "",
                author: "",
                date: ""
            };
            let post;
            fs.readFile(`${dirPath}/${file}`, "utf8", (err, contentsOfPost) => {
                const getMetadataIndex = (accumulator, element, index) => {
                    if (/^---/.test(element)) {
                        accumulator.push(index);
                    }
                    return accumulator;
                };
                const parseMetadata = ({ lines, metadataIndex }) => {
                    if (metadataIndex.length > 0) {
                        let metadata = lines.slice(metadataIndex[0] + 1, metadataIndex[1]);
                        metadata.forEach(line => {
                            obj[line.split(": ")[0]] = line.split(": ")[1];
                        });
                    }
                    return obj;
                };
                const parseContent = ({ lines, metadataIndex }) => {
                    if (metadataIndex.length > 0) {
                        lines = lines.slice(metadataIndex[1] + 1, lines.length);
                    }
                    return (lines.join("\n"));
                };
                const lines = contentsOfPost.split("\n");
                const metadataIndex = lines.reduce(getMetadataIndex, []);
                const metadata = parseMetadata({ lines, metadataIndex });
                const contentNoMetadata = parseContent({ lines, metadataIndex });
                post = {
                    id: i,
                    title: metadata.title ? metadata.title : "No title given",
                    author: metadata.author ? metadata.author : "No author given",
                    date: metadata.date ? metadata.date : "No date given",
                    contentNoMetadata: contentNoMetadata ? contentNoMetadata : "No content provided"
                };
                postList.push(post);
            });
        });
    });
    setTimeout(() => {
        console.log(postList);
    }, 500);
});
getPosts();
//# sourceMappingURL=getpost.js.map