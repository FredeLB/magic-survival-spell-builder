import { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { AutoComplete, Flex, Button } from "antd";

import type { AutoCompleteProps } from "antd";
import type { DefaultOptionType } from "antd/es/select";
import type { Spell } from "_types";

interface Props {
    list: Spell[];
}

interface CustomOptionType extends DefaultOptionType {
    spell?: Spell;
}

function BuilderAutoComplete(props: Props) {
    const { list } = props;

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [options, setOptions] = useState<AutoCompleteProps["options"]>([]);
    const [selectedValues, setSelectedValues] = useState<Spell[]>([]);

    // Option 1: Simple search on spell names
    const handleSearch = (inputValue: string) => {
        setOptions(() => {
            if (!inputValue.trim()) {
                return [];
            }

            const searchValue = inputValue.toLowerCase();
            return list
                .filter(
                    (spell) =>
                        spell.name.toLowerCase().includes(searchValue) ||
                        spell.family.toLowerCase().includes(searchValue)
                )
                .map((spell) => ({
                    label: (
                        <div>
                            <strong>{spell.name}</strong>
                            <div style={{ fontSize: "12px", color: "#666" }}>
                                ({spell.family})
                            </div>
                        </div>
                    ),
                    value: spell.id,
                    spell: spell,
                }));
        });
    };

    const handleFocus = () => {
        if (value) {
            handleSearch(value);
        }
        setOpen(true);
    };

    const handleBlur = () => {
        // Small delay to allow onClick to fire on options
        setTimeout(() => setOpen(false), 200);
    };

    const handleSelect = (_: string, option: CustomOptionType) => {
        setSelectedValues((prevValues) => {
            if (
                option.spell &&
                !prevValues.find((spell) => spell.id === option?.spell?.id)
            ) {
                return [...prevValues, option.spell as Spell];
            }
            return prevValues; // Spell already selected, do not add
        });

        setValue("");
        setOpen(false); // Close on select
    };

    const handleChange = (text: string) => {
        setValue(text);
        setOpen(text != null && text.length > 0);
    };

    const removeValue = (spell: Spell) => {
        setSelectedValues(selectedValues.filter((s) => s !== spell));
    };

    return (
        <>
            <AutoComplete
                placeholder="Search for a spell..."
                options={options}
                allowClear={true}
                value={value}
                open={open}
                showSearch={{ onSearch: handleSearch }}
                onChange={handleChange}
                onSelect={handleSelect}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={{ width: "100%" }}
            />
            <Flex gap="small" wrap>
                {selectedValues.map((spell: Spell) => (
                    <Button
                        type="primary"
                        key={spell.id}
                        icon={<CloseOutlined />}
                        iconPlacement={"end"}
                        onClick={() => removeValue(spell)}
                    >
                        {spell.name}
                    </Button>
                ))}
            </Flex>
        </>
    );
}

export { BuilderAutoComplete };
