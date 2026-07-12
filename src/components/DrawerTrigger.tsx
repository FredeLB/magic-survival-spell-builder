import { useState, forwardRef, useImperativeHandle } from "react";

import type { DrawerTriggerRef } from "_types";
import type { AntButtonColor, AntButtonVariant } from "_enums";

import { Drawer, Button } from "antd";

interface Props {
    title: string;
    triggerBtnLabel: string;
    triggerBtnColor?: AntButtonColor;
    triggerBtnVariant?: AntButtonVariant;
    children: React.ReactNode;
}

const DrawerTrigger = forwardRef<DrawerTriggerRef, Props>(
    function DrawerTrigger(props, ref) {
        const {
            title,
            triggerBtnLabel,
            children,
            triggerBtnColor,
            triggerBtnVariant,
        } = props;

        const [open, setOpen] = useState<boolean>(false);

        // Expose methods to parent via ref
        useImperativeHandle(ref, () => ({
            open: () => setOpen(true),
            close: () => setOpen(false),
            toggle: () => setOpen((prev) => !prev),
        }));

        return (
            <>
                <Button
                    size="middle"
                    color={triggerBtnColor}
                    variant={triggerBtnVariant ?? "outlined"}
                    onClick={() => setOpen(true)}
                >
                    {triggerBtnLabel}
                </Button>
                <Drawer
                    title={title}
                    closable={{ "aria-label": "Close Button" }}
                    onClose={() => setOpen(false)}
                    open={open}
                    styles={{
                        header: {
                            padding: "20px 12px",
                        },
                        body: {
                            padding: "12px",
                        },
                    }}
                >
                    {children}
                </Drawer>
            </>
        );
    }
);

export { DrawerTrigger };
