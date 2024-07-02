"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const syncFn = () => {
    console.log("동기");
};
const asyncFn = () => {
    return new Promise((res, rej) => {
        if (res) {
            res("비동기 완료");
        }
        else {
            rej("비동기 실패");
        }
    });
};
function main() {
    syncFn();
    asyncFn().then((value) => console.log(value));
    syncFn();
}
main();
const fetchData = () => {
    return new Promise((res, rej) => {
        const success = true;
        if (success) {
            res({ id: 1, name: "1" });
        }
        else {
            rej("data fetch failed");
        }
    });
};
fetchData()
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
function doFetch() {
    return __awaiter(this, void 0, void 0, function* () {
        // 비동기로직
        try {
            const data = yield fetchData();
            console.log(data);
        }
        catch (error) {
            console.error(error);
        }
    });
}
doFetch();
function loadConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("/api/config");
        const configData = yield response.json();
        return configData;
    });
}
function fetchData2(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const data = yield response.json();
        return data;
    });
}
