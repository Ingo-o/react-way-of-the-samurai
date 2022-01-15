import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

// При помощи describe можно объединять разные тесты.
describe("Testing ProfileStatus component", () => {
    test("status from the props should be in the state", () => {
        // Создаем компоненту в тестовом режиме (вне браузера).
        const component = create(<ProfileStatus status="Let's drink rum on Tortuga!"/>);
        const instance = component.getInstance();
        // Запускаем проверку.
        expect(instance.state.status).toBe("Let's drink rum on Tortuga!");
    });

    test("after component creation 'span' should contains correct status", () => {
        const component = create(<ProfileStatus status="Let's drink rum on Tortuga!"/>);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children[0]).toBe("Let's drink rum on Tortuga!");
    });

    test("after component creation 'span' should be displayed", () => {
        const component = create(<ProfileStatus status="Let's drink rum on Tortuga!"/>);
        const root = component.root;
        const span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("after component creation 'input' should not be displayed", () => {
        const component = create(<ProfileStatus status="Let's drink rum on Tortuga!"/>);
        const root = component.root;
        expect(() => {
            root.findByType("input");
        }).toThrow();
    });

    test("In edit mode instead of 'span' should be displayed 'input'", () => {
        const component = create(<ProfileStatus status="Let's drink rum on Tortuga!"/>);
        const root = component.root;
        const span = root.findByType("span");
        span.props.onDoubleClick();
        const input = root.findByType("input");
        expect(input.props.value).toBe("Let's drink rum on Tortuga!");
    });

    test("Callback should be called", () => {
        const mockCallback = jest.fn(x => 42 + x);
        const component = create(<ProfileStatus status="Let's drink rum on Tortuga!" updateUserStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});