"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
const STATUS_MESSAGES = {
    [common_1.HttpStatus.BAD_REQUEST]: "Bad Request",
    [common_1.HttpStatus.UNAUTHORIZED]: "Unauthorized",
    [common_1.HttpStatus.FORBIDDEN]: "Forbidden",
    [common_1.HttpStatus.NOT_FOUND]: "Not Found",
    [common_1.HttpStatus.INTERNAL_SERVER_ERROR]: "Internal Server Error",
};
let ExceptionsFilter = class ExceptionsFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        let status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Internal server error';
        let errorName = STATUS_MESSAGES[status];
        if (exception instanceof common_1.HttpException) {
            status = exception.getStatus();
            const res = exception.getResponse();
            if (typeof res === 'string') {
                message = res;
            }
            else if (Array.isArray(res.message)) {
                message = res.message;
            }
            else {
                message = res.message || message;
            }
            errorName = STATUS_MESSAGES[status] || 'Error';
        }
        response.status(status).json({
            success: false,
            message,
            error: errorName
        });
    }
};
exports.ExceptionsFilter = ExceptionsFilter;
exports.ExceptionsFilter = ExceptionsFilter = __decorate([
    (0, common_1.Catch)()
], ExceptionsFilter);
//# sourceMappingURL=exception.ifilter.js.map