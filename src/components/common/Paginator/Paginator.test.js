import React from "react";
import {create} from "react-test-renderer";
import Paginator from "./Paginator";

describe("Paginator component test", () => {
    test("pages count is 11, but should be showed only 10", () => {
        const component = create(<Paginator totalItemsCount={11} portionSize={10} pageSize={1}/>);
        const root = component.root;
        const spans = root.findAllByType("span");
        expect(spans.length).toBe(10);
    });

    test("if pages count is more then 10, 'Next' button should be shown", () => {
        const component = create(<Paginator totalItemsCount={11} portionSize={10} pageSize={1}/>);
        const root = component.root;
        const spans = root.findAllByType("button");
        expect(spans.length).toBe(1);
    });
});