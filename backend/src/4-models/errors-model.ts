export class ErrorsModel {
    public constructor(public status: number, public msg: string) {}
}

export class RouteNotFoundErrorModel extends ErrorsModel{
    public constructor(route: string) {
        super(404, `The route: ${route}, is not exits`)
    }
}

export class ResourceNotFoundErrorModel extends ErrorsModel {
    public constructor(id: number) {
        super(404, `The id: ${id}, is not exists`)
    }
}

export class UnAuthorizedErrorModel extends ErrorsModel {
    public constructor(msg: string){
        super(400, msg)
    }
}

export class ValidateErrorModel extends ErrorsModel {
    public constructor(msg: string) {
        super(400, msg)
    }
}