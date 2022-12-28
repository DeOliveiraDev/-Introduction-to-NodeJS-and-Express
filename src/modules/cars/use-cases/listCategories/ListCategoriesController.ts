import { Request, Response } from "express";
import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";


class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const categoryList = this.listCategoriesUseCase.execute();

    return response.status(200).json(categoryList)
  }
}

export { ListCategoriesController }