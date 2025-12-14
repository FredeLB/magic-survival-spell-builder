import { useState } from "react";

import type { Combo, Spell } from "_types";
import type { CustomType, AntButtonColor } from "_enums";
import type { SpellAttribute } from "enums/SpellAttribute";

import { Card, Drawer, Button, Flex } from "antd";

import {
    generateUniqueKey,
    getUIColorByCustomType,
    getCustomType,
} from "_utils";

import { CUSTOM_TYPE } from "_enums";

interface Props {
    title: string;
    btnLabel: string;
    btnColor?: string | CustomType;
    items: (Combo | Spell | SpellAttribute)[];
    onSelect?: (selection: Combo | Spell | SpellAttribute) => void;
}

function PickerDrawer(props: Props) {
    const { items, title, btnLabel, onSelect, btnColor } = props;

    const [open, setOpen] = useState<boolean>(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const getItemName = (item: Combo | Spell | SpellAttribute): string => {
        const customType = getCustomType(item);

        let name = "";

        if (customType != null) {
            switch (customType) {
                case CUSTOM_TYPE.Combo:
                    name = (item as Combo).name;
                    break;
                case CUSTOM_TYPE.Spell:
                    name = (item as Spell).name;
                    break;
                default:
                    name = "";
            }
        } else if (typeof item === "string") {
            return item;
        }

        return name;
    };

    const getItemBtnColor = (
        item: Combo | Spell | SpellAttribute
    ): AntButtonColor => {
        const customType = getCustomType(item);

        return getUIColorByCustomType(
            customType != null ? customType : CUSTOM_TYPE.Attribute
        );
    };

    return (
        <>
            <Button
                color={btnColor as AntButtonColor}
                variant="outlined"
                size="middle"
                onClick={showDrawer}
            >
                {btnLabel}
            </Button>
            <Drawer
                title={title}
                closable={{ "aria-label": "Close Button" }}
                onClose={onClose}
                open={open}
            >
                <Flex gap="small" wrap>
                    {items.map((item: Combo | Spell | SpellAttribute) =>
                        onSelect != null ? (
                            <Button
                                key={generateUniqueKey()}
                                color={getItemBtnColor(item)}
                                variant="solid"
                                onClick={() => {
                                    setOpen(false);
                                    onSelect(item);
                                }}
                            >
                                {getItemName(item)}
                            </Button>
                        ) : (
                            <Card
                                key={generateUniqueKey()}
                                size="small"
                                title={getItemName(item)}
                                style={{ width: "100%" }}
                                // extra={<a href="#">More</a>}
                            >
                                {/* {getItemName(item)} */}
                            </Card>
                        )
                    )}
                </Flex>
            </Drawer>
        </>
    );
}

export { PickerDrawer };
