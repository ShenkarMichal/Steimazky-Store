class ErrorsModel {
    public constructor(public status: number, public msg: string) {}
}

class RouteNotFoundErrorModel extends ErrorsModel{
    public constructor(route: string) {
        super(404, `The route: ${route}, is not exits`)
    }
}