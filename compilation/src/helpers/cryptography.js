"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cryptography = void 0;
const envVariables_1 = require("../config/envVariables");
const { encryptKey } = (0, envVariables_1.envVariables)();
const hashKey = encryptKey || "SuperSecretKey2500";
const letters = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
];
exports.cryptography = {
    encryptPassword(password, key = hashKey) {
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const encryptKey = [];
        const passwordArr = [];
        for (let i = 0; i < key.length; i++) {
            if (numbers.indexOf(Number(key[i])) !== -1) {
                encryptKey.push(numbers.indexOf(Number(key[i])));
            }
            else if (letters.indexOf(key[i].toLowerCase()) !== -1) {
                encryptKey.push(letters.indexOf(key[i].toLowerCase()));
            }
        }
        for (let i = 0; i < password.length; i++) {
            passwordArr.push(password[i]);
        }
        for (let i = 0; i < encryptKey.length; i++) {
            let count = 0;
            while (count !== Number(encryptKey[i])) {
                passwordArr.unshift(passwordArr[passwordArr.length - 1]);
                passwordArr.pop();
                count++;
            }
            passwordArr.push(key[i]);
        }
        return passwordArr.toString().replace(/\,/g, "");
    },
    decryptPassword(encryptedPassword, key = hashKey) {
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const encryptKey = [];
        const passwordArr = [];
        for (let i = 0; i < key.length; i++) {
            if (numbers.indexOf(Number(key[i])) !== -1) {
                encryptKey.push(numbers.indexOf(Number(key[i])));
            }
            else if (letters.indexOf(key[i].toLowerCase()) !== -1) {
                encryptKey.push(letters.indexOf(key[i].toLowerCase()));
            }
        }
        for (let i = 0; i < encryptedPassword.length; i++) {
            passwordArr.push(encryptedPassword[i]);
        }
        for (let i = encryptKey.length - 1; i >= 0; i--) {
            let count = 0;
            passwordArr.pop();
            while (count !== Number(encryptKey[i])) {
                passwordArr.push(passwordArr[0]);
                passwordArr.shift();
                count++;
            }
        }
        return passwordArr.toString().replace(/\,/g, "");
    },
    comparePassword(password, encryptedPassword, key = hashKey) {
        return exports.cryptography.encryptPassword(password, key) === encryptedPassword
            ? true
            : false;
    },
    generateToken(password, key = hashKey) {
        return exports.cryptography.encryptPassword(password + new Date().toISOString().split("T")[0], key);
    },
    validateToken(token, key = hashKey) {
        const decripted = exports.cryptography.decryptPassword(token, key);
        const date = decripted.slice(decripted.length - 10);
        const currentDate = new Date().toISOString().split("T")[0];
        return date === currentDate;
    },
};
