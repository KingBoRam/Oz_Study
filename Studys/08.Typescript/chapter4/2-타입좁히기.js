"use strict";
/*
타입 좁히기 type narrawing
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getId(id) {
    if (typeof id === "number") {
        return id;
    }
    return Number(id);
}
function power(option) {
    if (option === "off") {
        console.log("power off");
    }
    else {
        console.log("power on");
    }
}
function sendMessage(os) {
    if ("iMessage" in os) {
        os.iMessage();
    }
    else {
        os.message();
    }
}
sendMessage({
    iMessage: () => {
        console.log("sending iMessage");
    },
});
// instanceof
class ApiResponse {
}
class ErrorResponse {
    constructor() {
        this.message = "";
    }
}
function handleApiResponse(response) {
    return __awaiter(this, void 0, void 0, function* () {
        if (response instanceof ApiResponse) {
        }
        else if (response instanceof ErrorResponse) {
        }
    });
}
const apiResponse = new ApiResponse();
const errorResponse = new ErrorResponse();
handleApiResponse(apiResponse);
handleApiResponse(errorResponse);
// 타입 가드 type predicates
function isErrorResponse(response) {
    return response.message !== undefined;
}
const response = { message: "error..." };
if (isErrorResponse(response)) {
    console.log(response.message);
}
