import { useState } from "react";
import { AutoComplete } from "antd";

import type { AutoCompleteProps } from "antd";
import type { Spell } from 'js/types/_index'; 

interface Props {
    list: Spell[]
}

function SpellAutoComplete(props: Props) {

    const { list } = props


    const [options, setOptions] = useState<AutoCompleteProps["options"]>([]);

    // Option 1: Simple search on spell names
    const handleSearch = (value: string) => {
        setOptions(() => {
            if (!value.trim()) {
                return [];
            }

            const searchValue = value.toLowerCase();
            return list.filter((spell) =>
                spell.name.toLowerCase().includes(searchValue)
            ).map((spell) => ({
                label: (
                    <div>
                        <strong>{spell.name}</strong>
                        <div style={{ fontSize: "12px", color: "#666" }}>
                            Family: {spell.family}
                        </div>
                    </div>
                ),
                value: spell.id,
                spell: spell, // Store the full object for reference
            }));
        });
    };

    return (
        <AutoComplete
            style={{ width: 200 }}
            showSearch={{ onSearch: handleSearch }}
            placeholder="input here"
            options={options}
        />
    );
}

export { SpellAutoComplete }